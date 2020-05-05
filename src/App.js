import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';

import Posts from './components/Posts';
import PostForm from './components/Postform';

import store from './components/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='App'>
          <header className='App-header'></header>
          <PostForm />
          <hr />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
