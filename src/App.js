import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Chart from '../src/components/Chart';
import Stats from '../src/components/Stats';
import Nav from '../src/components/Nav';
import Tabs from '../src/components/Tabs';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Nav />
        <Tabs />
        <Chart />
        <Stats />
      </div>
    </Provider>
  );
}

export default App;
