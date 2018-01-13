import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';

// import IconButton from 'material-ui/IconButton';
// import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import logo from '../../images/boomtown-logo.svg';
import ItemsContainer from '../../containers/Items';

export default class HeaderBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: "",
      tags: ["Electronics","Household Items", "Musical Insteuments", "Physical Media", "Recreational Equipment", "Sporting Goods", "Tools"]
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event, index, value) => {

    this.setState({value})

    console.log(this.state.tags)

    return <ItemsContainer index={index} tags={this.state.tags}/>

    
  };
    
  render() {
    return (
      // <MuiThemeProvider>
      <AppBar
   
    iconElementLeft={
      <div>
      <a href="/"><img src={logo}/></a>
    <SelectField value={this.state.value} onChange={this.handleChange} style={{width: 300,}} hintText="Filter by Tag">
    
      <MenuItem value={1} primaryText={this.state.tags[0]} />
      <MenuItem value={2} primaryText={this.state.tags[1]} />
      <MenuItem value={3} primaryText={this.state.tags[2]} />
      <MenuItem value={4} primaryText={this.state.tags[3]} />
      <MenuItem value={5} primaryText={this.state.tags[4]} />
      <MenuItem value={6} primaryText={this.state.tags[5]} />
      <MenuItem value={7} primaryText={this.state.tags[6]} />
    
    </SelectField>
      </div>
    }
    iconElementRight={
      <div>
      <RaisedButton label="My Profile" primary={true} />
      <RaisedButton label="Log Out" secondary={true} />
      </div>
    }
    style={{
      backgroundColor: "white",
      fontFamily: "Roboto, sans-serif"
    }}
  />
  // </MuiThemeProvider>
    );
  }
}