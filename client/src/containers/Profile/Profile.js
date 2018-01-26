import React from 'react';
import PropTypes from 'prop-types';

import { Card } from 'material-ui/Card';
import Gravatar from 'react-gravatar';

import Items from '../Items/Items';

import './style.css';

const Profile = ({ items, user }) => (
    //  console.log(userid);
    <div className="profile">
        <Card style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="profile-header">
                <div className="user-info">
                    <h1>{user.fullname}</h1>
                    <p>{user.bio}</p>
                </div>

                <div className="user-stats">
                    <p>
                        <span>{items.length}</span> Items shared
                    </p>
                    <p>
                        <span>{user.borrowed.length}</span> Items borrowed
                    </p>
                </div>
                <Gravatar
                    email={user.email}
                    className="user-gravatar"
                    size={170}
                />
            </div>
        </Card>

        <Items items={items} />
    </div>
);

export default Profile;

Profile.propTypes = {
    items: PropTypes.array.isRequired,
    user: PropTypes.object.isRequired
};
