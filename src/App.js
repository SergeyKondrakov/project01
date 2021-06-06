import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';

function App(props) {
  return (
    <div className='appwrapper'>
      <Header />
      <Nav />
      <div className='content'>
        <Route path='/profile' render={() => <Profile store={props.store} />} />
        <Route path='/dialogs' render={() => <DialogsContainer store={props.store} />} />
        {/* <Dialogs /> */}
      </div>
    </div>
  );
};

export default App;
