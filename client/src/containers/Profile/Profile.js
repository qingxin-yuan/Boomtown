import React, {Component} from 'react';
import {Card } from 'material-ui/Card';
import Gravatar from 'react-gravatar';
import Items from '../Items';

import './style.css'


export default class Profile extends Component {
  render(){
    return (
      <div className="profile"> 
        <div className="profile-header">
        <Card>
          <Gravatar email="qingxin.yn@gmail.com" />
        </Card>
        </div>
      <Items />
      </div>
    )

    
    
    
   
  }
}