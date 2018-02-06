import React from 'react';
import { connect } from 'react-redux';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

import { getFilterTags, getTagList } from '../../redux/modules/items';
// import Items from '../../containers/Items';

const fetchTags = gql`
    query {
        tags {
            id
            title
        }
    }
`;

const TagFilter = props => {
    // console.log(props.data.tags);
    props.dispatch(getTagList(props.data.tags));

    // TAG FIELDS FROM POSTGRES
    const tagFields = props.tagList ? props.tagList : [];
    // console.log(tagFields);
    const handleChange = (event, index, values) => {
        // console.log(this.props.items);
        // console.log(event, index, values);
        props.dispatch(getFilterTags(values));

        // this.setState({ values });
    };

    const menuItems = values =>
        
        tagFields.map(tag => (
            <MenuItem
                key={tag.title}
                insetChildren
                checked={values && values.indexOf(tag.id) > -1}
                value={tag.id}
                primaryText={tag.title}
            />
        ));

    return (
        <div>
            <SelectField
                multiple
                value={props.tags}
                onChange={handleChange}
                style={{ width: 256, marginLeft: '20px' }}
                hintText="Filter by Tag"
            >
                {menuItems(props.tags)}
            </SelectField>
        </div>
    );
};

const mapStateToProps = state => ({
    isLoading: state.items.isLoading,
    items: state.items.items,
    // filteredItems: state.items.filteredItems,
    // error: state.items.error,
    tags: state.items.tags,
    tagList: state.items.tagList
});

export default compose(connect(mapStateToProps), graphql(fetchTags))(TagFilter);
