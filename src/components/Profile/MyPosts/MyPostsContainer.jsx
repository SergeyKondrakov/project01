import React from 'react';
import MyPosts from './MyPosts';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer'


function MyPostsContainer(props) {

  let state = props.store.getState();

  let addPost = () => {
      props.store.dispatch(addPostActionCreator());
  };

  let onPostChange = (text) => {
    props.store.dispatch(updateNewPostTextActionCreator(text));

  };

  return (<MyPosts updateNewPostText={onPostChange} addPost={addPost} 
    posts={state.profilePage.postsData} newPostText={state.profilePage.newPostText} />)

}

export default MyPostsContainer;