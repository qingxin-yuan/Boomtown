import './style.css'

import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Gravatar from 'react-gravatar';
import moment from 'moment';

const ItemCard = ({item, borrower}) => (
  
  <Card>
    
    <CardMedia
      overlay={
      
        item.available?<CardTitle title="Unavailable" />:''
       
      }
    >

      <img src={item.imageurl} alt="" />
    </CardMedia>

    <CardHeader 
      avatar={<Gravatar email={item.itemowner.email} />}
      title={item.itemowner.fullname}
      subtitle={moment(item.created).fromNow()} />
    <CardTitle title={item.title} subtitle={item.tags.join(", ")} />
    <CardText>
     {item.description}
    </CardText>

  </Card>
);

export default ItemCard;


// export default class ItemCard extends Component{
//   render(){
//     return <div> ItemCard </div>
//   }
// }