import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItem } from '../store/items';
class Stats extends Component {
  componentWillMount() {
    console.log(this.props.fetchItem());
  }

  render() {
    return (
      <div>
        <h1>Stats</h1>
      </div>
    );
  }
}

export default connect(null, { fetchItem })(Stats);
