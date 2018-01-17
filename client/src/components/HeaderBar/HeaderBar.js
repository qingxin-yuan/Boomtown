import React, {Component} from 'react';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';


import logo from '../../images/boomtown-logo.svg';
import Items from '../../containers/Items';

import './style.css'


const tags = ["Electronics","Household Items", "Musical Insteuments", "Physical Media", "Recreational Equipment", "Sporting Goods", "Tools"];

export default class HeaderBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      values: [],
     
    };
    this.handleChange = this.handleChange.bind(this);
    this.menuItems = this.menuItems.bind(this);
  }

  handleChange = (event, index, values) => {

    this.setState({values})

    // console.log(this.state.tags[index]);

    // return <Items tag={tags[index]}/>
    
  };
    
  menuItems(values) {
    return tags.map((tag) => (
      <MenuItem
        key={tag}
        insetChildren={true}
        checked={values && values.indexOf(tag) > -1}
        value={tag}
        primaryText={tag}
      />
    ));
  }



  render() {
    const {values} = this.state;
    return (

      <AppBar
   
        iconElementLeft={
          <div className="header-left">
            <a href="/"><img src={logo} alt="boomtown logo"/></a>
            <SelectField multiple={true} value={values} onChange={this.handleChange} style={{width: 256,marginLeft: '20px'}} hintText="Filter by Tag">
        
              {this.menuItems(values)}
            </SelectField>
          </div>
        }

        iconElementRight={
          <div className="header-right">
            <RaisedButton label="My Profile" primary={true} style={{
              marginRight: '18px'
            }}/>
            <a href="/login">
              <RaisedButton label="Logout" secondary={true} />
            </a>
          </div>
        }
        
        style={{
          backgroundColor: "white",
          fontFamily: "Roboto, sans-serif",
        }}
  />

    );
  }
}