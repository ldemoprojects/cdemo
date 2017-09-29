import AppDispatcher from './dispatcher';
import Constants from './constants';

class Actions {
  // addContact(sku, update) {
  //   AppDispatcher.dispatch({
  //     actionType: Constants.ADD_CONTACT,
  //     value: data
  //   })
  // }
  //
  // removeContact(sku) {
  //   AppDispatcher.dispatch({
  //     actionType: Constants.REMOVE_CONTACT,
  //     id: id
  //   })
  // }

  receiveData(contacts) {
    AppDispatcher.dispatch({
      actionType: Constants.RECEIVE_DATA,
      data: contacts
    });
  }

  expandContact(index) {
    AppDispatcher.dispatch({
      actionType: Constants.EXPAND_CONTACT,
      data: index
    });
  }
}

export default new Actions();
