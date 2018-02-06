import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import Items from './Items';
// import { fetchItemsAndUser } from '../../redux/modules/items';

import './style.css';
// import { fetchItemsAndUser } from '../../redux/modules/profile';

// filter function
const filterItems = (tags, items) => {
    // console.log(tags,items);
    const result = [];
    // const tagList =
    if (tags.length === 0 || tags === []) {
        // dispatch(getItems(items));
        return items;
    }
    items.forEach(item => {
        tags.forEach(filterTag => {
            // console.log(filterTag);
            if (
                item.tags.map(tag => tag.id).indexOf(filterTag) > -1 &&
                !result.includes(item)
            ) {
                result.push(item);
            }
            // return result;
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
        // const filteredItems = ;
        // console.log(filteredItems, items);

        // console.log(this.props.data);
        return loading && !items ? (
            <p>loading...</p>
        ) : (
            <Items items={filterItems(this.props.tags, items) || items} />
        );
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
export default compose(
    // graphql(fetchTags),
    graphql(fetchItems),
    connect(mapStateToProps)
)(withRouter(ItemsContainer));
