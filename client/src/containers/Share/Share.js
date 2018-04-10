import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    Card,
    CardHeader,
    CardMedia,
    CardTitle,
    CardText
} from 'material-ui/Card';

import RaisedButton from 'material-ui/RaisedButton/';
import Gravatar from 'react-gravatar';
import moment from 'moment';

import { Step, Stepper, StepLabel, StepContent } from 'material-ui/Stepper';
import FlatButton from 'material-ui/FlatButton';

import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';

import { firebaseAuth, firebaseRef } from '../../config/firebase';

import { getShareTitle, getShareDescription } from '../../redux/modules/share';
import { resetTags } from '../../redux/modules/items';
import TagFilter from '../../components/TagFilter/';
import ValidatedTextfield from '../../components/ValidatedTextField/';

import './style.css';

const addItemMutation = gql`
    mutation addNewItem(
        $title: String
        $description: String
        $imageurl: String
        $itemowner: ID
        $tags: [TagInput]
    ) {
        createNewItem(
            newItem: {
                title: $title
                description: $description
                imageurl: $imageurl
                itemowner: $itemowner
                tags: $tags
            }
        ) {
            title
        }
    }
`;
const fetchTags = gql`
    query {
        tags {
            id
            title
        }
    }
`;
class Share extends Component {
    state = {
        finished: false,
        stepIndex: 0,
        values: [],

        imageurl:
            'https://firebasestorage.googleapis.com/v0/b/boomtown-b0c6a.appspot.com/o/item-placeholder.jpg?alt=media&token=6f7e6af4-697f-4323-8cca-ff3d9aeb4891'
    };

    handleNext = () => {
        const { stepIndex } = this.state;
        this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex >= 2
        });
    };

    handlePrev = () => {
        const { stepIndex } = this.state;
        if (stepIndex > 0) {
            this.setState({ stepIndex: stepIndex - 1 });
        }
    };

    submitForm = () => {
        const { tags } = this.props;
        const tagList = [];
        tags.forEach(tag => tagList.push({ id: tag }));
        this.props
            .mutate({
                variables: {
                    title: this.props.title,
                    description: this.props.description,
                    imageurl: this.state.imageurl,
                    itemowner: firebaseAuth.currentUser.uid,
                    tags: tagList
                }
            })
            .then(data => {
                console.log('got data!', data);
            })
            .catch(error => {
                console.log('something terrible happened', error);
            });
        this.props.dispatch(resetTags());
        this.props.history.push('/items');
    };
    fileUpload = e => {
        // if (input.target.value) {
        const file = e.target.files[0];
        console.log(file);
        const name = `${+new Date()}-${file.name}`;
        const metadata = {
            contentType: file.type
        };
        const task = firebaseRef.child(name).put(file, metadata);
        // console.log(file, name, metadata);
        task
            .then(snapshot => {
                const url = snapshot.downloadURL;
                // console.log(url);
                this.setState({ imageurl: url });

                console.log(this.state.imageurl);
                //   document.querySelector('#someImageTagID').src = url;
            })
            .catch(error => {
                console.error(error);
            });
    };
    renderStepActions(step) {
        const { stepIndex } = this.state;

        return (
            <div style={{ margin: '12px 0' }}>
                {step === 3 && (
                    <RaisedButton
                        label="submit"
                        disableTouchRipple
                        disableFocusRipple
                        primary
                        onClick={this.submitForm}
                        style={{ marginRight: 12 }}
                    />
                )}
                {step < 3 && (
                    <RaisedButton
                        label="next"
                        disableTouchRipple
                        disableFocusRipple
                        primary
                        onClick={this.handleNext}
                        style={{ marginRight: 12 }}
                    />
                )}
                {step > 0 && (
                    <FlatButton
                        label="Back"
                        disabled={stepIndex === 0}
                        disableTouchRipple
                        disableFocusRipple
                        onClick={this.handlePrev}
                    />
                )}
            </div>
        );
    }

    render() {
        // this.props.data.tags
        //     ? this.props.dispatch(getTagList(this.props.data.tags))
        //     : '';
        // const tagsIdTitle = this.props.tagList ? this.props.tagList : [];
        // console.log(tagsIdTitle);
        // const tagList = this.props.tagList ? this.props.tagList : [];
        // console.log(this.props.data);
        const { finished, stepIndex, values } = this.state;
        // console.log(document.querySelector('#image'));

        // if (document.getElementById('image')) {

        return (
            <div className="share-container">
                <div className="share-item-card">
                    <Card>
                        <CardMedia>
                            <img
                                src={this.state.imageurl}
                                alt="item placeholder"
                            />
                        </CardMedia>

                        <Link to={`/profile/${firebaseAuth.currentUser.uid}`}>
                            <CardHeader
                                avatar={
                                    <Gravatar
                                        email={firebaseAuth.currentUser.email}
                                        className="share-gravatar"
                                    />
                                }
                                // title={item.itemowner.fullname}
                                subtitle={moment().fromNow()}
                            />
                        </Link>
                        <CardTitle title={this.props.title || 'Awesome Item'} />
                        <CardText>
                            {this.props.description ||
                                'Profound item description.'}
                        </CardText>
                    </Card>
                </div>
                <div
                    className="share-form"
                    style={{ maxWidth: 600, maxHeight: 500, margin: 'auto' }}
                >
                    {' '}
                    <Stepper activeStep={stepIndex} orientation="vertical">
                        <Step>
                            <StepLabel>Add an Image</StepLabel>
                            <StepContent>
                                <p>
                                    We live in a visual culture. Upload an image
                                    of the item you&apos;re sharing.
                                </p>
                                <RaisedButton
                                    label="Choose an image"
                                    labelPosition="before"
                                    style={{ margin: '12' }}
                                    containerElement="label"
                                >
                                    <input
                                        type="file"
                                        id="image"
                                        onChange={this.fileUpload}
                                        style={{
                                            cursor: 'pointer',
                                            position: 'absolute',
                                            top: 0,
                                            bottom: 0,
                                            right: 0,
                                            left: 0,
                                            width: '100%',
                                            opacity: 0
                                        }}
                                    />
                                </RaisedButton>
                                {this.renderStepActions(0)}
                            </StepContent>
                        </Step>
                        <Step>
                            <StepLabel>Add a Title & Description</StepLabel>
                            <StepContent>
                                <p>
                                    Folks need to know what you&apos;re sharing.
                                    Give them a clue by adding a title &
                                    description.
                                </p>

                                <ValidatedTextfield
                                    label="Title"
                                    handleChange={e =>
                                        this.props.dispatch(
                                            getShareTitle(e.target.value)
                                        )
                                    }
                                />
                                <ValidatedTextfield
                                    label="Description"
                                    handleChange={e =>
                                        this.props.dispatch(
                                            getShareDescription(e.target.value)
                                        )
                                    }
                                />

                                {this.renderStepActions(1)}
                            </StepContent>
                        </Step>
                        <Step>
                            <StepLabel>Categorize Your Item</StepLabel>
                            <StepContent>
                                <p>
                                    To share an item, you&apos;ll add it to our
                                    list of categories. You can select multiple
                                    categories.
                                </p>

                                <TagFilter />
                                {this.renderStepActions(2)}
                            </StepContent>
                        </Step>
                        <Step>
                            <StepLabel>Confirm Things!</StepLabel>
                            <StepContent>
                                <p>
                                    Great! If you&apos;re happy with everything,
                                    tap the button.
                                </p>
                                {this.renderStepActions(3)}
                            </StepContent>
                        </Step>
                    </Stepper>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    // isLoading: state.items.isLoading,
    // items: state.items.items,
    // filteredItems: state.items.filteredItems,
    // error: state.items.error,
    title: state.share.title,
    description: state.share.description,
    tags: state.items.tags,
    tagList: state.items.tagList
});

export default compose(
    graphql(addItemMutation),

    connect(mapStateToProps),
    graphql(fetchTags)
)(withRouter(Share));
