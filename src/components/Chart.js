import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItem } from '../store/items';
class Chart extends Component {
  componentWillMount() {
    this.props.fetchItem();
  }

  render() {
    return (
      <div>
        <h1>Chart</h1>
      </div>
    );
  }
}

export default connect(null, { fetchItem })(Chart);
