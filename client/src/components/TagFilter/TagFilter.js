import React, {Component} from 'react';
import {connect} from 'react-redux';


import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';


import logo from '../../images/boomtown-logo.svg';
import Items from '../../containers/Items';

import {getFilterTags} from '../../redux/modules/items';


const tags = ["Electronics","Household Items", "Musical Instruments", "Physical Media", "Recreational Equipment", "Sporting Goods", "Tools"];

class TagFilter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      values: [],
     
    };
    this.handleChange = this.handleChange.bind(this);
    this.menuItems = this.menuItems.bind(this);
  }

  handleChange = (event, index, values) => {
    // console.log(this.props.items);

    this.props.dispatch(getFilterTags(values));


    this.setState({values});  
    
  };


  menuItems(values) {
    // let values = 
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
    <SelectField multiple={true} value={values} onChange={this.handleChange} style={{width: 256,marginLeft: '20px'}} hintText="Filter by Tag">
        
      {this.menuItems(values)}
    </SelectField>
    )
    
  }
}



const mapStateToProps = (state) =>({
  isLoading: state.items.isLoading,
  items: state.items.items,
  // filteredItems: state.items.filteredItems,
  error: state.items.error,
  tags: state.items.tags,

});

export default connect(mapStateToProps)(TagFilter);