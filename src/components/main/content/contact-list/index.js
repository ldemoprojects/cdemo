import React from 'react';
import PropTypes from 'prop-types';
import Actions from '../../../../flux/actions';
import './contact-list.scss';

export default class ContactList extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps) {
    if(nextProps.contacts != this.props.contacts) return true;
    if(nextProps.expanded != this.props.expanded) return true;
    return false;
  }

  displayDefault(name, id) { // default display for contact
    return (<li key={name+id}>
      {name}
      <div className="btn more" onClick={() => this.onClickMore(id)}>
        More...
      </div>
    </li>);
  }

  displayExpanded(contact) {
    // const name, email, phoneNumber, address, company, birthday, image;
    return (<li className="expanded" key={contact.name+contact.id}>
      <span className="title">{contact.name}</span>
      <div className="contact-info-container">
        <img src={require('../../../../flux/data/img/avatar.png')} />
        <p>Phone Number: {contact.phoneNumber}</p>
        <p>Address: {contact.address}</p>
        <p>Email: {contact.email}</p>
        <p>Company: {contact.company}</p>
        <p>Birthday: {contact.birthday}</p>
      </div>
      <div className="btn less" onClick={() => this.onClickLess()}>
        Less...
      </div>
    </li>);
  }

  onClickMore(id){
    //call expand contact action to update store state
    Actions.expandContact(id);
  }

  onClickLess(id){
    Actions.expandContact(null);
  }

  render() {
    return (
     <div className="contact-list-container">
       <ul>
         {this.props.contacts.people.map(function(contact){
           return this.props.expanded == contact.id ? this.displayExpanded(contact) :
              this.displayDefault(contact.name, contact.id)
         }, this)}
       </ul>
      </div>
      );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.object,
  expanded: PropTypes.number
};
