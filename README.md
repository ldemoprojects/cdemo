# Contacts List 

## Overview 
This is a single page application written in React. It displays a list of contacts, with the ability to drill into each contact. The set up data for this app is available in the main app store.  

![Overview](/src/redux/data/img/overview.png?raw=true)

## Architecture 
The architecture of this app involves a parent container, with a Header, Footer, and Content. Communication between components is done using flux. The main dispatch event is `EXPAND_CONTACT`, which is triggered from the ContactList component whenever a contact is clicked. This updates the store state to match the id of the expanded component. 

## Data 
The data consists of a main contacts object that includes the user's general information. Inside, there is a `people` array that contains the user's contacts. 

  ```  
    name: 'Alex',
    image: './img/avatar.png',
    people: [
      {
        id: 0,
        name: 'John Wittaker',
        email: 'jwittaker@email.com',
        phoneNumber: '123-345-4567',
        address: '124 Willow Lane',
        company: 'XYZ Corp',
        birthday: '12-09-1990',
        image: './img/john.png'
      }
    ]
 ```

## Future Improvements
Add functionality for deleting/adding/editing contacts. Implement internationalization. Set up a testing framework. Implement an API for storing and retrieving user information from a remote server. 


