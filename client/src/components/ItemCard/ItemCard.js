import './style.css'

import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Gravatar from 'react-gravatar';

const ItemCard = ({item, users}) => (
  
  <Card>

    <CardHeader 
      avatar={<Gravatar email={item.itemowner.email} />}
      title={item.itemowner.fullname}
      subtitle={item.created} />
    
    
    <CardMedia
      overlay={
      
        (item.available?<CardTitle title="Unavailable" />:'')
        // ||(items.borrower?<CardTitle title={"lent to "+users.find(el=> el.id===items.borrower)} />:'')
      }
    >
 {/* {console.log(users.find())} */}
      <img src={item.imageurl} alt="" />
    </CardMedia>
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