import React, { Component } from 'react';
// import Items from './Items';
import Profile from './Profile';

import './style.css';

export default class ProfileContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            users: [],
            userid: this.props.match.params.userid,
            
        };
    }
    componentDidMount() {
        // Fetch JSON and attach to state
        const items = fetch('http://localhost:4000/items').then(r => r.json());
        const users = fetch('http://localhost:4000/users').then(r => r.json());

    
        Promise.all([items, users]).then(response => {
        //     const userTable = {};
            const [itemsList, userList] = response;

            // console.log(itemsList, userList);
 
            itemsList.map(item => {
      
                item.itemowner = userList.slice().find(
                  user=>user.id===item.itemowner
                )
                
            });
            let items = itemsList.filter(item=> {return item.itemowner.id === this.state.userid});
            
          console.log(items);
            
            this.setState({ items: items, users: userList});
            // console.log(userList);

        });
    }
    render() {
      if (this.state.items === undefined){
        return false;
      }
      else {
        return <Profile items={this.state.items} users={this.state.users}/>;
      }
        // if(this.props.tag !== undefined){
            // console.log(this.props.tag);
        // }
    

      //TODO: finish filtering
        
    }
}