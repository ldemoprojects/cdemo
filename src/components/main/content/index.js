import React from 'react';
import PropTypes from 'prop-types';
import ContactList from './contact-list';
import './content.scss';

export default class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps) {
    if(nextProps.name != this.props.name) return true;
    return false;
  }

  render() {
    return (
     <div className="content-container">
        <h6>Contacts</h6>
        <ContactList {...this.props} />
      </div>
    );
  }
}

Content.propTypes = {
  name: PropTypes.string
};
