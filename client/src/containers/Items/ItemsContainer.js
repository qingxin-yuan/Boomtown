import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

import { connect } from 'react-redux';

import Items from './Items';
// import { fetchItemsAndUser } from '../../redux/modules/items';

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

const fetchItems = gql`
    query {
        items {
            id
            title
            itemowner {
                id
                email
                fullname
            }
            borrower {
                id
                fullname
            }
            created
            imageurl
            description
            available
            tags {
                id
                title
            }
        }
    }
`;

class ItemsContainer extends Component {
    // static propsType = {};

    // componentDidMount() {
    //     this.props.dispatch(fetchItemsAndUser());

    //     const fetchItems = gql`
    //         query{
    //             items
    //         }
    //     `
    // }

    render() {
        // if (this.props.isLoading) return <p>loading...</p>;

        // TODO: finish filtering
        const { loading, items } = this.props.data;
        const filteredItems = filterItems(this.props.tags, items);
        console.log(filteredItems);

        // console.log(this.props);
        return loading ? <p>loading...</p> : <Items items={filteredItems || items} />;
    }
}

const mapStateToProps = state => ({
    // convert states into props to pass in react class
    isLoading: state.items.isLoading,
    // items: state.items.items,
    // filteredItems: state.items.filteredItems,
    error: state.items.error,
    tags: state.items.tags
});

// export default connect(mapStateToProps)(ItemsContainer);
export default compose(graphql(fetchItems), connect(mapStateToProps))(
    ItemsContainer
);
