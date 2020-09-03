import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { fetchItem } from './store/items';
import Charts from '../src/components/Chart';
import Stats from '../src/components/Stats';
import Nav from '../src/components/Nav';
import Tabs from '../src/components/Tabs';

class App extends Component {
  componentDidMount() {
    this.props.fetchItem();
  }

  render() {
    if (!this.props.item) {
      return <h1>Loading!</h1>;
    }
    if (this.props.item) {
      return (
        <>
          <Nav />
          <div className='App'>
            <Tabs {...this.props} />
            <div className='chartStatsBlock'>
              <Charts {...this.props} />
              <Stats {...this.props} />
            </div>
          </div>
        </>
      );
    }
  }
}

const mapStatetoProps = state => ({
  item: state.item,
});

export default connect(mapStatetoProps, { fetchItem })(App);
