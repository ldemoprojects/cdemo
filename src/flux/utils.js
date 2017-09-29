import Actions from './actions';

class Utils {
  getContactData() {
    const data = JSON.parse(localStorage.getItem('contacts'));
    Actions.receiveContact(data);
  }
};

export default new Utils();
