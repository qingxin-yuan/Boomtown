import React, { Component } from 'react';
import Items from './Items';
import './style.css';

export default class ItemsContainer extends Component {
    constructor() {
        super();
        this.state = {
            items: [],
            users: [],
            
        };
    }
    componentDidMount() {
        // Fetch JSON and attach to state
        const items = fetch('http://localhost:4000/items').then(r => r.json());
        const users = fetch('http://localhost:4000/users').then(r => r.json());

        // console.log(items, users);
        Promise.all([items, users]).then(response => {
        //     const userTable = {};
            const [itemsList, userList] = response;

            console.log(itemsList, userList);
 
            itemsList.map(item => {
      
                item.itemowner = userList.slice().find(
                  user=>user.id===item.itemowner
                )

            });

            this.setState({ items: itemsList, users: userList});
            // console.log(userList);

        });
    }
    render() {
        // if(this.props.tag !== undefined){
            // console.log(this.props.tag);
        // }
    

      //TODO: finish filtering
        return <Items items={this.state.items} users={this.state.users} tag={this.props.tag} i={this.props.index}/>;
    }
}