import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ItemCard from "../../components/ItemCard/ItemCard.js";
import Masonry from 'react-masonry-component';

// import ContentAdd from 'material-ui/svg-icons/content/add';

import './style.css'


const overlay = (items, users)=>{

  // let borrower = items.borrower?users.find(el=>el.id===items.borrower):''
  // return borrower.fullname;
  // item.available?<CardTitle title="Unavailable" />:''
  // (borrower)?<CardTitle title={"lent to "+borrower} />:''
  // if ()
}



const Items = ({items, users, tag, i}) => {
  

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
    
    (items!== undefined && users !== undefined)?items.map(item=>
  // <Masonry className="grid-item">
    <li className="masonry-item" key={item.id}>

    <ItemCard key={item.id} item={item} borrower={overlay(item, users)} />
    
    </li>

    
  ):''}

 </Masonry>




)
} 



export default Items;



  // JSON.stringify(list)
  // console.log(items);
  // return <ItemCard/>
// export default class Items extends Component {
//   render(){
//     return null;
//   }}
    
//     // <ItemCard itemList={this.state.itemList}/>
  
//   }
// }

//specify what type of props are passing in
Items.propTypes = {
  items: PropTypes.array.isRequired
}