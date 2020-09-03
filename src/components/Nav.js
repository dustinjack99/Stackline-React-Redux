import React, { Component } from 'react';
import logo from '../assets/logo.png';
export default class Nav extends Component {
  render() {
    return (
      <div className='navHead'>
        <img className='logo' src={logo} alt='stacklogo' />
      </div>
    );
  }
}
