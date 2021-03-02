import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route } from 'react-router-dom';

function App(props) {
  return (
    <div className='appwrapper'>
      <Header />
      <Nav />
      <div className='content'>
        <Route path='/profile' render={() => <Profile
          profilePage={props.state.profilePage}
          addPost={props.addPost}
          updateNewPostText={props.updateNewPostText} />} />
        <Route path='/dialogs' render={() => <Dialogs state={props.state.messagesPage} />} />
        {/* <Dialogs /> */}
      </div>
    </div>
  );
};

export default App;
