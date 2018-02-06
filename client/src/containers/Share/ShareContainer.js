import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Share from './Share';

import './style.css';

const addItem = gql`
mutation addNewItem(
    $title:String,
    $description:String,
    $imageurl:String,
    $itemowner:ID,
    $tags:[TagInput]
  ){
    createNewItem(newItem:{
      title:$title,
      description:$description,
      imageurl:$imageurl,
      itemowner:$itemowner,
      tags:$tags
    }){
      title
    }
  }
`;

class ShareContainer extends Component {
    render() {
        return <Share />;
    }
}

export default graphql(addItem)(ShareContainer);
