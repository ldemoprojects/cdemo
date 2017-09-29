import React from 'react';
import Main from './main';
import Store from '../flux/store';
import Constants from '../flux/constants'

function getContactsState() {
  return {
    contacts: Store.getContacts(),
    expanded: Store.getExpanded()
  };
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = getContactsState();
  }

  componentDidMount(){
    Store.addChangeListener(Constants.EXPAND_CONTACT, this.onExpandContact);
  }

  onExpandContact(){
    console.log("on expand contact");
  }

  render() {
    return (
     <div>
        <Main contacts={this.state.contacts} expanded={this.state.expanded}/>
      </div>
      );
  }
}
