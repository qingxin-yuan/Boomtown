import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ItemCard from "../../components/ItemCard/ItemCard.js";
import Masonry from 'react-masonry-component';

// import ContentAdd from 'material-ui/svg-icons/content/add';

import './style.css'






const Items = ({items}) => {
  

return (
  
<Masonry className="masonry" elementType="ul" > 
  
  {
    
    (items!== undefined)?items.map(item=>
  // <Masonry className="grid-item">
    <li className="masonry-item" key={item.id}>

    <ItemCard key={item.id} item={item}/>
    
    </li>

    
  ):''}

 </Masonry>


)
} 



export default Items;



//specify what type of props are passing in
Items.propTypes = {
  items: PropTypes.array.isRequired
}