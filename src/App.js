import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='appwrapper'>
        <Header />
        <Nav />
        <div className='content'>
          <Route path='/profile' component={Profile} />
          <Route path='/dialogs' component={Dialogs} />
          {/* <Dialogs /> */}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
