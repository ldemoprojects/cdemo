import React from 'react';
import PropTypes from 'prop-types';
import './footer.scss';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps) {
    if(nextProps.name != this.props.name) return true;
    return false;
  }

  render() {
    return (
     <div className="footer-container">
        Home | About | Contact Us 
      </div>
    );
  }
}

Footer.propTypes = {
  name: PropTypes.string
};
