import React from 'react';
import PropTypes from 'prop-types';

export default class ContactList extends React.Component {
  constructor(props) {
    super(props);
    console.log("entering");
  }

  shouldComponentUpdate(nextProps) {
    if(nextProps.name != this.props.name) return true;
    return false;
  }

  render() {
    return (
     <div>
        Welcome, Alex
      </div>
      );
  }
}

Header.propTypes = {
  name: PropTypes.string
};
