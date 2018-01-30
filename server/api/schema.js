module.exports = `

  type User{
    id: ID 
    email: String
    fullname: String
    bio: String
    shareditems: [Item]
    numborrowed: String
  }

  type Tag{
    id: ID
    title: String
  }

  type Item{
    id: ID
    title: String
    itemowner: User
    borrower: User
    created: String
    imageurl: String
    description: String
    available: Boolean
    tags: [Tag]
  }

  input TagInput{
    id: ID
    title: String
  }

  input AddItemInput{
    imageurl: String
    title: String
    description: String
    tags: [TagInput]
  }
  type AddItemReturn{
    title: String
  }
 input UserInput{
    id: ID
    email: String
    fullname: String
  }
  input UpdateItemInput{
    id: ID
    borrower: UserInput
  }
 
  type Mutation{

    addItem(newItem: AddItemInput): Item
    updateItem(newItem: UpdateItemInput): Item
  
  }



  type Query{
    items: [Item]
    users: [User]
    user(id: ID): User
    item(id: ID): Item
  }






`;



// const resolvers = require("./resolvers"); 

// module.exports =  
