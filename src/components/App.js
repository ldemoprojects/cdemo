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
    Store.addChangeListener(Constants.LOAD_DATA, this.onLoadData);
    Store.addChangeListener(Constants.EXPAND_CONTACT, this.onExpandContact);
  }

  onLoadData(){
    console.log("on load data");
  }

  onExpandContact(){
    console.log("on expand contact");
  }

  render() {
    return (
     <div>
        <Main {...this.props} />
      </div>
      );
  }
}
