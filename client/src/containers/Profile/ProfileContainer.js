import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

// import { connect } from 'react-redux';
// import Items from './Items';
import Profile from './Profile';
// import { fetchItemsAndUser } from '../../redux/modules/profile';

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

class ProfileContainer extends Component {
    // componentDidMount() {
    //     this.props.dispatch(fetchItemsAndUser(this.props.match.params.userid));
    // }

    render() {
        // const userid = this.props.match.params.userid;
        // console.log(userid);
        // console.log(this.props);
        const { loading, user } = this.props.data;
        console.log(user);
        // if (this.props.items.length === 0) {
        //     return false;
        // }
        // console.log(this.props.items);
        return loading ? (
            <p> loading....</p>
        ) : (
            <Profile items={user.shareditems} user={user} />
        );
    }
}
// const mapStateToProps = state => ({
//     // convert states into props to pass in react class

//     items: state.profile.items
// });

// export default connect(mapStateToProps)(ProfileContainer);

export default graphql(fetchUser, {
    options: ownProps => ({
        variables: {
            id: ownProps.match.params.userid // e.g. from React Router!
        }
    })
})(ProfileContainer);
