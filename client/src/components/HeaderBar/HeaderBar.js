import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';

// import IconButton from 'material-ui/IconButton';
// import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import logo from '../../images/boomtown-logo.svg';

export default class HeaderBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  handleChange = (event, index, value) => {
    this.setState({value})
    console.log(value)

  };
    

  render() {
    return (
      <Toolbar
      style={{
        backgroundColor: 'white',
        height: '80px'
        }}>
        <ToolbarGroup firstChild={true}>

          <img src={logo}/>

          <SelectField value={this.state.value} onChange={this.handleChange} style={{width: 300,}} hintText="Filter by Tag">
          
            <MenuItem value={1} primaryText="Electronics" />
            <MenuItem value={2} primaryText="Household Items" />
            <MenuItem value={3} primaryText="Musical Insteuments" />
            <MenuItem value={4} primaryText="Physical Media" />
            <MenuItem value={5} primaryText="Recreational Equipment" />
            <MenuItem value={6} primaryText="Sporting Goods" />
            <MenuItem value={7} primaryText="Tools" />
         
          </SelectField>
        </ToolbarGroup>
        <ToolbarGroup>
          
        
          <RaisedButton label="My Profile" primary={true} />
          <RaisedButton label="Log Out" primary={true} />
        
        </ToolbarGroup>
      </Toolbar>
    );
  }
}