import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


import Items from '../../containers/Items';

import './style.css';

const ItemCardList = () => (

    <div className="items-wrapper">
        <Items />
        <div className="share-button">
            <a href="/share">
                <FloatingActionButton
                    secondary
                    style={{
                        position: 'fixed',
                        right: '20px',
                        bottom: '20px'
                    }}
                >
                    <ContentAdd />
                </FloatingActionButton>
            </a>
        </div>
    </div>
);


export default ItemCardList;
