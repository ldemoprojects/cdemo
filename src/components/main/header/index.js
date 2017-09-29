import React from 'react';
import PropTypes from 'prop-types';
import './header.scss';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    console.log("entering contact list");
  }

  shouldComponentUpdate(nextProps) {
    if(nextProps.name != this.props.name) return true;
    return false;
  }

  render() {
    return (
     <div className="header-container">
        <span>Welcome, {this.props.contacts.name}! </span>
      </div>
    );
  }
}

Header.propTypes = {
  name: PropTypes.string
};
