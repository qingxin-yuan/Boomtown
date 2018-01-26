import React, { Component } from 'react';
import { connect } from 'react-redux';

import Items from './Items';
import { fetchItemsAndUser } from '../../redux/modules/items';

import './style.css';

// filter function
const filterItems = (tags, items) => {
    // console.log(tags,items);
    const result = [];
    if (tags.length === 0 || tags === []) {
        // dispatch(getItems(items));
        return items;
    }
    items.forEach(item => {
        tags.forEach(filterTag => {
            // console.log(filterTag);
            if (item.tags.map(tag => tag.title).indexOf(filterTag) > -1) {
                result.push(item);
            }
        });
    });

    return result;
};
// };
class ItemsContainer extends Component {
    // static propsType = {};

    componentDidMount() {
        this.props.dispatch(fetchItemsAndUser());
    }

    render() {
        if (this.props.isLoading) return <p>loading...</p>;

        // TODO: finish filtering

        const filteredItems = filterItems(this.props.tags, this.props.items);
        console.log(filteredItems);
        // filteredItems? filteredItems : this.props.items;

        return <Items items={filteredItems} />;
    }
}

const mapStateToProps = state => ({
    // convert states into props to pass in react class
    isLoading: state.items.isLoading,
    items: state.items.items,
    // filteredItems: state.items.filteredItems,
    error: state.items.error,
    tags: state.items.tags
});

export default connect(mapStateToProps)(ItemsContainer);
