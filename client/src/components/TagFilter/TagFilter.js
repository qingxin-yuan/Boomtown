import React from 'react';
import { connect } from 'react-redux';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';

import { getFilterTags, getTagList } from '../../redux/modules/items';

const fetchTags = gql`
    query {
        tags {
            id
            title
        }
    }
`;

const TagFilter = props => {
    props.dispatch(getTagList(props.data.tags));

    // TAG FIELDS FROM POSTGRES
    const tagFields = props.tagList ? props.tagList : [];

    const handleChange = (event, index, values) => {
        props.dispatch(getFilterTags(values));
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
    tags: state.items.tags,
    tagList: state.items.tagList
});

TagFilter.propTypes = {
    dispatch: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    tagList: PropTypes.array,
    tags: PropTypes.array.isRequired
};

TagFilter.defaultProps = {
    tagList: []
};

export default compose(connect(mapStateToProps), graphql(fetchTags))(TagFilter);
