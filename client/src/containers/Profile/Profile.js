import React, {Component} from 'react';
import {Card } from 'material-ui/Card';
import Gravatar from 'react-gravatar';
// import Masonry from 'react-masonry-component';
import Items from '../Items/Items';


import './style.css'


const Profile = ({items, users}) => {
//  console.log(userid);
    return (
      <div className="profile"> 
        
        <Card style={{maxWidth: '800px', margin: '0 auto'}}>
          <div className="profile-header">
            <div className="user-info">
              <h1></h1>
              <p>Learn'em good.</p>
            </div>
            {/* <div className="user-meta"> */}
              <div className="user-stats">
                <p><span>9</span> Items shared</p>
                <p><span>3</span> Items borrowed</p>
              </div>
            <Gravatar email="mandi@redacademy.com" className = "user-gravatar" size={170}/>
            </div>
          {/* </div> */}
        </Card>
        
      <Items items={items} users={users}/>
      </div>
    )
   

}

export default Profile;