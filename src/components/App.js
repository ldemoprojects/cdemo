import React from 'react';
import Main from './main';
import Store from '../flux/store';
import Constants from '../flux/constants'

function getContactsState() {
  return {
    contacts: Store.getContacts()
  };
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = getContactsState();
  }

  componentDidMount(){
    Store.addChangeListener(Constants.RECEIVE_DATA, this.getContacts());
    Store.addChangeListener(Constants.EXPAND_CONTACT, this.selectContact());
  }

  getContacts(){
    console.log("test");
  }

  render() {
    return (
     <div>
        <Main {...this.props} />
      </div>
      );
  }
}
