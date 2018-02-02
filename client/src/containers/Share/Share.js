import React, { Component } from 'react';

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
import { firebaseAuth } from '../../config/firebase';

import { Step, Stepper, StepLabel, StepContent } from 'material-ui/Stepper';
// import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
// import ExpandTransition from 'material-ui/internal/ExpandTransition';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

/**
 * A contrived example using a transition between steps
 */
export default class Share extends Component {
    // constructor() {
    //     super();
    state = {
        finished: false,
        stepIndex: 0,
        values: [],
        tags: [
            'Electronics',
            'Household Items',
            'Musical Instruments',
            'Physical Media',
            'Recreational Equipment',
            'Sporting Goods',
            'Tools'
        ]
    };
    // this.handleChange = this.handleChange.bind(this);
    // this.menuItems = this.menuItems.bind(this);
    // }
    handleChange = (event, index, values) => {
        // console.log(this.props.items);

        // props.dispatch(getFilterTags(values));

        this.setState({ values });
    };

    menuItems = values =>
        // let values =
        this.state.tags.map(tag => (
            <MenuItem
                key={tag}
                insetChildren
                checked={values && values.indexOf(tag) > -1}
                value={tag}
                primaryText={tag}
            />
        ));

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

    renderStepActions(step) {
        const { stepIndex } = this.state;

        return (
            <div style={{ margin: '12px 0' }}>
                <RaisedButton
                    label={stepIndex === 3 ? 'Finish' : 'Next'}
                    disableTouchRipple
                    disableFocusRipple
                    primary
                    onClick={this.handleNext}
                    style={{ marginRight: 12 }}
                />
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
        const { finished, stepIndex, values, tags } = this.state;

        return (
            <div style={{ maxWidth: 380, maxHeight: 500, margin: 'auto' }}>
                {' '}
                <Stepper activeStep={stepIndex} orientation="vertical">
                    <Step>
                        <StepLabel>Add an Image</StepLabel>
                        <StepContent>
                            <p>
                                We live in a visual culture. Upload an image of
                                the item you're sharing.
                            </p>
                            <RaisedButton
                                label="Choose an Image"
                                labelPosition="before"
                                style={{ margin: '12' }}
                                containerElement="label"
                            >
                                <input
                                    type="file"
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
                                Folks need to know what you're sharing. Give
                                them a clue by adding a title & description.
                            </p>
                            <TextField
                                style={{ marginTop: 0 }}
                                floatingLabelText="Title"
                            />
                            <TextField
                                style={{ marginTop: 0 }}
                                floatingLabelText="Description"
                            />
                            {this.renderStepActions(1)}
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>Categorize Your Item</StepLabel>
                        <StepContent>
                            <p>
                                To share an item, you'll add it to our list of
                                categories. You can select multiple categories.
                            </p>
                            <SelectField
                                multiple
                                value={values}
                                onChange={this.handleChange}
                                style={{ width: 256, marginLeft: '20px' }}
                                hintText="Select Category Tags"
                            >
                                {this.menuItems(this.state.values)}
                            </SelectField>
                            {this.renderStepActions(2)}
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>Confirm Things!</StepLabel>
                        <StepContent>
                            <p>
                                Great! If you're happy with everything, tap the
                                button.
                            </p>
                            {this.renderStepActions(3)}
                        </StepContent>
                    </Step>
                </Stepper>
            </div>
        );
    }
}
// import './style.css';

// export default class Share extends Component {
//     render() {
//         return <div>Share</div>;
//     }
// }
