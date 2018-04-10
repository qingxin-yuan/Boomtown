import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';

import Profile from './Profile';

import './style.css';

const fetchUser = gql`
    query fetchUser($id: ID) {
        user(id: $id) {
            id
            email
            fullname
            bio
            shareditems {
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
            numborrowed
        }
    }
`;

const ProfileContainer = props => {
    const { loading, user } = props.data;

    return loading ? (
        <p> loading....</p>
    ) : (
        <Profile items={user.shareditems} user={user} />
    );
};

ProfileContainer.propTypes = {
    data: PropTypes.object.isRequired
};

export default graphql(fetchUser, {
    options: ownProps => ({
        variables: {
            id: ownProps.match.params.userid // e.g. from React Router!
        }
    })
})(ProfileContainer);
