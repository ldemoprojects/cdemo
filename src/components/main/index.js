import React from 'react';
import Header from './header';
// import Content from './content';
// import Footer from './footer';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
     <div>
        <Header />
      </div>
      );
  }
}
