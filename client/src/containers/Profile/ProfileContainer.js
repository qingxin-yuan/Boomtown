import React, { Component } from 'react';
import {connect} from 'react-redux';
// import Items from './Items';
import Profile from './Profile';
import {fetchItemsAndUser} from '../../redux/modules/profile';

import './style.css';

class ProfileContainer extends Component {

    
    componentDidMount(){
       
        this.props.dispatch(fetchItemsAndUser(this.props.match.params.userid));
       
    }
    render() {
       

        if (this.props.items.length === 0){
            return false;
          }
          else {
 
            return <Profile items={this.props.items} user={this.props.items[0].itemowner}/>;
      
 
    }
}
}
const mapStateToProps = (state) => ({       //convert states into props to pass in react class
    
    items: state.profile.items,

});

export default connect(mapStateToProps)(ProfileContainer);