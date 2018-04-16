import React from 'react';
import { Route, Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';

import { firebaseAuth } from '../../config/firebase';
import logo from '../../images/boomtown-logo.svg';
import TagFilter from '../TagFilter';

import './style.css';

const HeaderBar = () => (
    <AppBar
        iconElementLeft={
            <div className="header-left">
                <Link to="/items">
                    <img src={logo} alt="boomtown logo" />
                </Link>

                <Route exact path={'/'} component={TagFilter} />
            </div>
        }
        iconElementRight={
            <div className="header-right">
                {firebaseAuth.currentUser && (
                    <Link to={`/profile/${firebaseAuth.currentUser.uid}`}>
                        <RaisedButton
                            label="My Profile"
                            primary
                            style={{
                                marginRight: '18px'
                            }}
                        />
                    </Link>
                )}

                <Link to="/">
                    <RaisedButton
                        label="Logout"
                        secondary
                        onClick={() => {
                            firebaseAuth.signOut();
                        }}
                    />
                </Link>
            </div>
        }
        style={{
            backgroundColor: 'white',
            fontFamily: 'Roboto, sans-serif'
        }}
    />
);

export default HeaderBar;
