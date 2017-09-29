import AppDispatcher from './dispatcher';
import Constants from './constants';

const Actions = {

  // Add item to cart
  addToCart: function(sku, update) {
    AppDispatcher.handleAction({
      actionType: FluxCartConstants.ADD_CONTACT,
      sku: sku,
      update: update
    })
  },

  // Remove item from cart
  removeFromCart: function(sku) {
    AppDispatcher.handleAction({
      actionType: FluxCartConstants.REMOVE_CONTACT,
      sku: sku
    })
  },

  receiveContacts: function(data) {
    AppDispatcher.handleAction({
      actionType: Constants.RECEIVE_DATA,
      data: data
    })
  },

  expandContact: function(index) {
    AppDispatcher.handleAction({
      actionType: FluxCartConstants.EXPAND_CONTACT,
      data: index
    })
  }

};

module.exports = FluxCartActions;
