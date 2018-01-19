import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ItemCard from "../../components/ItemCard/ItemCard.js";
import Masonry from 'react-masonry-component';

// import ContentAdd from 'material-ui/svg-icons/content/add';

import './style.css'


const overlay = (items)=>{

  // let borrower = items.borrower?users.find(el=>el.id===items.borrower):''
  // return borrower.fullname;
  // item.available?<CardTitle title="Unavailable" />:''
  // (borrower)?<CardTitle title={"lent to "+borrower} />:''
  // if ()
}



const Items = ({items, tag, i}) => {
  

  // tags = items.tags;
  // items = items.filter(item=>(item.tags[0]||item.tags[1])===this.props.tags[i])

  // console.log(items);
// if(tag !== undefined){
    // console.log(tag);
    let newList = items.slice().filter(item=> item.tags === tag)
    // console.log(newList);
// }



return (
  
<Masonry className="masonry" elementType="ul" > 
  
  {
    
    (items!== undefined)?items.map(item=>
  // <Masonry className="grid-item">
    <li className="masonry-item" key={item.id}>

    <ItemCard key={item.id} item={item} borrower={overlay(item)} />
    
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