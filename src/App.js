import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Chart from '../src/components/Chart';
import Stats from '../src/components/Stats';
import Nav from '../src/components/Nav';
import Tabs from '../src/components/Tabs';
import configureAppStore from './store/configureStore';

const store = configureAppStore();

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Nav />
      </div>
    </Provider>
  );
}

export default App;
