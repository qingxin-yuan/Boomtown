import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
    Card,
    // CardActions,
    CardHeader,
    CardMedia,
    CardTitle,
    CardText
} from 'material-ui/Card';
// import FloatingActionButton from 'material-ui/FloatingActionButton';
// import ContentAdd from 'material-ui/svg-icons/content/add';
// import FlatButton from 'material-ui/FlatButton';
import Gravatar from 'react-gravatar';
import moment from 'moment';

import './style.css';

const ItemCard = ({ item, overlayText }) => (
    <Card>
        <CardMedia
            overlay={overlayText ? <CardTitle title={overlayText} /> : ''}
        >
            <img src={item.imageurl} alt="" />
        </CardMedia>

        <Link to={`/profile/${item.itemowner.id}`}>
            <CardHeader
                avatar={<Gravatar email={item.itemowner.email} />}
                title={item.itemowner.fullname}
                subtitle={moment(item.created).fromNow()}
            />
        </Link>
        <CardTitle title={item.title} subtitle={item.tags.join(', ')} />
        <CardText>{item.description}</CardText>

        {/* <FloatingActionButton style={{backgroundColor: 'black'}}>
    <ContentAdd />
    </FloatingActionButton> */}
    </Card>
);

export default ItemCard;

ItemCard.propTypes = {
    item: PropTypes.object.isRequired,
    overlayText: PropTypes.string.isRequired
};
