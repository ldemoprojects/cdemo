import AppDispatcher from './dispatcher';
import {EventEmitter} from 'events';
import Constants from './constants';

let contacts = [];
let expanded = null;

function loadData(data) {
  contacts = data[0];
  expanded = data[0].people[0];
}

class Store extends EventEmitter {
  constructor(){
    super();
    this.dispatchToken = AppDispatcher.register(this.dispatcherCallback.bind(this))
  }

  getContacts() {
    return contacts;
  }

  getExpanded(){
    return expanded;
  }

  setExpanded(index) {
    expanded = contacts.people[index];
  }

  emitChange(event) {
    this.emit(event);
  }

  addChangeListener (event, callback) {
    this.on(event, callback);
  }

  removeChangeListener (event, callback) {
    this.removeListener(event, callback);
  }

  dispatcherCallback(action) {
      switch (action.actionType) {
          case Constants.EXPAND_CONTACT:
              this.submitArticle(action.value);
              break;
          case Constants.RECEIVE_DATA:
              this.approveArticle(action.value);
              break;
      }

      this.emitChange('STORE_' + action.actionType);

      return true;
  }

};


export default new Store();
