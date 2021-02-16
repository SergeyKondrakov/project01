import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post'

function MyPosts() {
  return <div>
    <div className={classes.mypostscontainer}>
      <textarea className={classes.textarea}></textarea>
      <div>
        <button>Add Post</button>
      </div>

      <Post name="Xavier Dumoulie" message="Hi, how are you?" />
      <Post name="Xavier Dumoulie" message="It's my first post"/>
      


    </div>



  </div>

}

export default MyPosts;