import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
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
