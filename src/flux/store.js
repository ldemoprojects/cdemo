import AppDispatcher from './dispatcher';
import {EventEmitter} from 'events';
import Constants from './constants';

let contacts = {
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
    },
    {
      id: 1,
      name: 'Alice Lane',
      email: 'alane@email.com',
      phoneNumber: '345-466-4567',
      address: '100 Park Ave',
      company: 'ABC Corp',
      birthday: '01-12-1970',
      image: './img/alice.png'
    },
    {
      id: 2,
      name: 'Joey King',
      email: 'jking@email.com',
      phoneNumber: '452-345-4567',
      address: '10 Oak St',
      company: 'DET Enterprises',
      birthday: '03-09-1976',
      image: './img/joey.png'
    },
    {
      id: 3,
      name: 'Emma Harris',
      email: 'eharris@email.com',
      phoneNumber: '905-345-4567',
      address: '89 Rose Ave',
      company: 'KOP Inc',
      birthday: '02-13-1982',
      image: './img/emma.png'
    },
    {
      id: 4,
      name: 'Steve Owens',
      email: 'sowens@email.com',
      phoneNumber: '876-244-4567',
      address: '20 Aspen Road',
      company: 'Jacobson Corp',
      birthday: '05-13-1995',
      image: './img/steve.png'
    }
  ]
};

let expanded = null;

class Store extends EventEmitter {
  constructor(){
    super();
    this.dispatchToken = AppDispatcher.register(this.dispatcherCallback.bind(this))
  }

  getContacts() {
    return contacts;
  }

  getExpanded(){
    console.log(expanded);
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
              this.setExpanded(action.data);
              break;
      }

      this.emitChange(Constants.EXPAND_CONTACT);

      return true;
  }

};


export default new Store();
