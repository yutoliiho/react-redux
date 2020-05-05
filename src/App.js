import React from 'react';
import './App.css';
import Posts from './components/Posts';
import Postform from './components/Postform';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Posts />
        <Postform />
      </header>
    </div>
  );
}

export default App;
