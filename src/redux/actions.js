import AppDispatcher from './dispatcher';
import Constants from './constants';

class Actions {

  expandContact(index) {
    AppDispatcher.dispatch({
      actionType: Constants.EXPAND_CONTACT,
      data: index
    });
  }
}

export default new Actions();
