import React, { Component } from 'react';
import {connect} from 'react-redux';
// import Items from './Items';
import Profile from './Profile';
import {fetchItemsAndUser} from '../../redux/modules/items';

import './style.css';

class ProfileContainer extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {

    //         userid: this.props.match.params.userid,
            
    //     };
    // }
    
    componentDidMount(){
        // console.log(this.props);
        this.props.dispatch(fetchItemsAndUser());
       
    }
    render() {
       

        if (this.props.items.length === 0){
            return false;
          }
          else {
 
            const profileItems = this.props.items.filter(item=> {return item.itemowner.id === this.props.match.params.userid});
            
            const profileUser = profileItems[0].itemowner;


            return <Profile items={profileItems} user={profileUser}/>;
      
 
    }
}
}
const mapStateToProps = (state) => ({       //convert states into props to pass in react class
    
    items: state.items.items,

});

export default connect(mapStateToProps)(ProfileContainer);