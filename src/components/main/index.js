import React from 'react';
import Header from './header';
import Content from './content';
import Footer from './footer';
import './main.scss';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
     <div className="main-container">
        <Header name={this.props.contacts.name}/>
        <Content {...this.props} />
        <Footer />
      </div>
      );
  }
}
