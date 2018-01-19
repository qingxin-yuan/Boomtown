import React, { Component } from 'react';
import {connect} from 'react-redux';

import Items from './Items';
import {fetchItemsAndUser} from '../../redux/modules/items';

import './style.css';

class ItemsContainer extends Component {

    // static propsType = {};
 
    componentDidMount(){
        this.props.dispatch(fetchItemsAndUser());
    }


    render() {
       
    
        if ( this.props.isLoading) return <p>loading...</p>
      //TODO: finish filtering
        return <Items items={this.props.items} tag={this.props.tag} i={this.props.index}/>;
    }
}


const mapStateToProps = (state) => ({       //convert states into props to pass in react class
    isLoading: state.items.isLoading,
    items: state.items.items,

    error: state.items.error,
});

export default connect(mapStateToProps)(ItemsContainer);

//or ItemContainer.Proptypes={}