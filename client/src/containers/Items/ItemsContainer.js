import React, { Component } from 'react';
import {connect} from 'react-redux';

import Items from './Items';
import {fetchItemsAndUser} from '../../redux/modules/items';

import './style.css';

class ItemsContainer extends Component {

    // static propsType = {};
 
    
    // componentDidMount() {
    //     // Fetch JSON and attach to state
    //     const items = fetch('http://localhost:4000/items').then(r => r.json());
    //     const users = fetch('http://localhost:4000/users').then(r => r.json());

    //     // console.log(items, users);
    //     Promise.all([items, users]).then(response => {
    //     //     const userTable = {};
    //         const [itemsList, userList] = response;

    //         console.log(itemsList, userList);
 
    //         itemsList.map(item => {
      
    //             item.itemowner = userList.slice().find(
    //               user=>user.id===item.itemowner
    //             )

    //         });

    //         this.setState({ items: itemsList, users: userList});
    //         // console.log(userList);

    //     });
    // }

    componentDidMount(){
        this.props.dispatch(fetchItemsAndUser());
    }


    render() {
        // if(this.props.tag !== undefined){
            // console.log(this.props.tag);
        // }
    

      //TODO: finish filtering
        return <Items items={this.props.items} users={this.props.users} tag={this.props.tag} i={this.props.index}/>;
    }
}


const mapStateToProps = (state) => ({       //convert states into props to pass in react class
    isLoading: state.items.isLoading,
    items: state.items.items,
    users: state.items.users,
    error: state.items.error,
});

export default connect(mapStateToProps)(ItemsContainer);

//or ItemContainer.Proptypes={}