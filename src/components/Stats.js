import React, { Component } from 'react';
export default class Stats extends Component {
  render() {
    const { item } = this.props;
    return (
      <div className='statsDiv'>
        <h1>Stats</h1>
      </div>
    );
  }
}
