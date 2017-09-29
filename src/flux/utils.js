import FluxContactActions from './actions';

module.exports = {

  // Load mock contact data from localStorage into ProductStore via Action
  getContactData: function() {
    var data = JSON.parse(localStorage.getItem('contacts'));
    FluxContactActions.receiveContact(data);
  }

};
