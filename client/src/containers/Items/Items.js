import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ItemCard from "../../components/ItemCard/ItemCard.js";
import Masonry from 'react-masonry-component';


import './style.css'



const Items = ({items}) => {

const overlay = (item) =>{

  //HARDCODED LOGGED IN USERID!!

  if ((item.itemowner.id === "eEvh1WUF5nb5eeUksUQb3Ph0kOU2") && (!item.available)){
   
  return "Lent to" + item.borrowerName;

  }

  else if (item.itemowner.id !== "eEvh1WUF5nb5eeUksUQb3Ph0kOU2" && !item.available){
  return "Unavailable";

  }

  else
    return "";

  
}


return (
  
<Masonry className="masonry" elementType="ul" > 
  
  {
    
    (items!== undefined)?items.map(item=>
  // <Masonry className="grid-item">
 
   


    <li className="masonry-item" key={item.id}>

    <ItemCard key={item.id} item={item} overlayText={overlay(item)}/>
    
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