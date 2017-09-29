import React from 'react';
import PropTypes from 'prop-types';

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
     <div>
        Welcome, (this.props.name)!
      </div>
    );
  }
}

Header.propTypes = {
  name: PropTypes.string
};
