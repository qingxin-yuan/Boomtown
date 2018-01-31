import React from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';
import ItemCard from '../../components/ItemCard/ItemCard';

import './style.css';

const Items = ({ items }) => {
    const overlay = item => {
        // HARDCODED LOGGED IN USERID!!

        // if (
        //     item.itemowner.id === 'LAi9TYWxgGhbjgHu1Sm6ZvB1tRP2' &&
        //     !item.available
        // ) {
        //     return `Lent to ${item.borrower.fullname}`;
        // } else if (
        //     item.itemowner.id !== 'LAi9TYWxgGhbjgHu1Sm6ZvB1tRP2' &&
        //     !item.available
        // ) {
        //     return 'Unavailable';
        // }
        return '';
    };
    // const overlay = '';
    return (
        <Masonry className="masonry" elementType="ul">
            {items !== undefined
                ? items.map(item => (
                    // <Masonry className="grid-item">

                    <li className="masonry-item" key={item.id}>
                        <ItemCard
                            key={item.id}
                            item={item}
                            overlayText={overlay(item)}
                        />
                    </li>
                ))
                : ''}
        </Masonry>
    );
};

export default Items;

// specify what type of props are passing in
Items.propTypes = {
    items: PropTypes.array.isRequired
};
