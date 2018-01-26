import React from 'react';
import { connect } from 'react-redux';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import { getFilterTags } from '../../redux/modules/items';

const tags = [
    'Electronics',
    'Household Items',
    'Musical Instruments',
    'Physical Media',
    'Recreational Equipment',
    'Sporting Goods',
    'Tools'
];

const TagFilter = (props) => {
    const handleChange = (event, index, values) => {
        // console.log(this.props.items);

        props.dispatch(getFilterTags(values));

        // this.setState({ values });
    };

    const menuItems = values =>
        // let values =
        tags.map(tag => (
            <MenuItem
                key={tag}
                insetChildren
                checked={values && values.indexOf(tag) > -1}
                value={tag}
                primaryText={tag}
            />
        ));

    return (
        <SelectField
            multiple
            value={props.tags}
            onChange={handleChange}
            style={{ width: 256, marginLeft: '20px' }}
            hintText="Filter by Tag"
        >
            {menuItems(props.tags)}
        </SelectField>
    );
};

const mapStateToProps = state => ({
    isLoading: state.items.isLoading,
    items: state.items.items,
    // filteredItems: state.items.filteredItems,
    error: state.items.error,
    tags: state.items.tags,
});

export default connect(mapStateToProps)(TagFilter);
