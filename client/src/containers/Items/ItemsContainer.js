import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Items from './Items';

import './style.css';

export const fetchItems = gql`
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
    filterItems = (tags, items) => {
        const result = [];
        if (tags.length === 0 || tags === []) {
            return items;
        }
        items.forEach(item => {
            tags.forEach(filterTag => {
                if (
                    item.tags.map(tag => tag.id).indexOf(filterTag) > -1 &&
                    !result.includes(item)
                ) {
                    result.push(item);
                }
            });
        });
        return result;
    };
    render() {
        const { loading, items } = this.props.data;
        return loading ? (
            <p>loading...</p>
        ) : (
            <Items items={this.filterItems(this.props.tags, items) || items} />
        );
    }
}

const mapStateToProps = state => ({
    isLoading: state.items.isLoading,
    error: state.items.error,
    tags: state.items.tags
});

ItemsContainer.propTypes = {
    data: PropTypes.object.isRequired,
    tags: PropTypes.array.isRequired
};

export default compose(
    graphql(fetchItems),
    connect(mapStateToProps)
)(withRouter(ItemsContainer));
