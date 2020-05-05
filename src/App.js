import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './components/store';

import Posts from './components/Posts';
import Postform from './components/Postform';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <header className='App-header'>
          <Postform />
          <Posts />
        </header>
      </div>
    </Provider>
  );
}

export default App;
