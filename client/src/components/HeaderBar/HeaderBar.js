import React, {Component} from 'react';
import {connect} from 'react-redux';
import { 
  BrowserRouter as Router, 
  Route,
  Switch,
  Link
  // Redirect
} from 'react-router-dom';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';


import logo from '../../images/boomtown-logo.svg';
import Items from '../../containers/Items';

import TagFilter from '../TagFilter';
import {getFilterTags} from '../../redux/modules/items';


import './style.css'


const HeaderBar = (match) =>{

    return (

      <AppBar
   
        iconElementLeft={
          <div className="header-left">

            <Link to="/"><img src={logo} alt="boomtown logo"/></Link>
          
           
            <Route exact path={'/'} component={TagFilter} />
               

          </div>
        }

        iconElementRight={
          <div className="header-right">
            <Link to="/profile/eEvh1WUF5nb5eeUksUQb3Ph0kOU2">
              <RaisedButton label="My Profile" primary={true} style={{
                marginRight: '18px'
              }}/>
            </Link>
            <Link to="/login">
              <RaisedButton label="Logout" secondary={true} />
            </Link>
          </div>
        }
        
        style={{
          backgroundColor: "white",
          fontFamily: "Roboto, sans-serif",
        }}
  />

    );
  }


export default HeaderBar;