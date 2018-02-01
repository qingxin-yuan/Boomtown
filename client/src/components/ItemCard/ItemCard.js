import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
    Card,
    CardHeader,
    CardMedia,
    CardTitle,
    CardText
} from 'material-ui/Card';

import RaisedButton from 'material-ui/RaisedButton/';
import Gravatar from 'react-gravatar';
import moment from 'moment';
import { firebaseAuth } from '../../config/firebase';

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
                avatar={<Gravatar email={'' || item.itemowner.email} />}
                title={item.itemowner.fullname}
                subtitle={moment(item.created).fromNow()}
            />
        </Link>
        <CardTitle
            title={item.title}
            subtitle={item.tags.map(tag => `${tag.title}`).join(', ')}
        />
        <CardText>{item.description}</CardText>
        {(!item.borrower && firebaseAuth.currentUser.uid !== item.itemowner.id) ? (
            <RaisedButton label="Borrow" secondary style={{ margin: '10px' }} />
        ) : ''}
    </Card>
);

export default ItemCard;

ItemCard.propTypes = {
    item: PropTypes.object.isRequired,
    overlayText: PropTypes.string.isRequired
};
