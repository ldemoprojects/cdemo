import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import ContactData from './flux/data/contacts.js';
import ContactUtils from './flux/utils';

ContactData.init(); // load contact data into localStorage
ContactUtils.getContactData();

ReactDOM.render(<App />, document.getElementById('root'));
