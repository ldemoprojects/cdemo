import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import Contacts from './flux/data';
import Utils from './flux/utils';
import Store from './flux/store';

// Contacts.init(); // load contact data into localStorage
// Utils.getContactData();

ReactDOM.render(<App />, document.getElementById('root'));
