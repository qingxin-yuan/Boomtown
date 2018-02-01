import React from 'react';
// import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import { firebaseAuth } from '../../config/firebase';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';

import logo from '../../images/boomtown-logo.svg';
// import Items from '../../containers/Items';

import TagFilter from '../TagFilter';
// import { getFilterTags } from '../../redux/modules/items';

import './style.css';

const HeaderBar = () => (
    <AppBar
        iconElementLeft={
            <div className="header-left">
                <Link to="/items">
                    <img src={logo} alt="boomtown logo" />
                </Link>

                <Route exact path={'/items'} component={TagFilter} />
            </div>
        }
        iconElementRight={
            <div className="header-right">
                <Link to="/profile/LAi9TYWxgGhbjgHu1Sm6ZvB1tRP2">
                    <RaisedButton
                        label="My Profile"
                        primary
                        style={{
                            marginRight: '18px'
                        }}
                    />
                </Link>
                <Link to="/">
                    <RaisedButton
                        label="Logout"
                        secondary
                        onClick={() => firebaseAuth.signOut()}
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
