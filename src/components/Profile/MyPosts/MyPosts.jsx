import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post'

function MyPosts(props) {

  let postsElements = props.postsData.map ( posts => <Post name="Сергей Кондраков" message={posts.message} />)

  return <div>
    <div className={classes.mypostscontainer}>
      <textarea className={classes.textarea}></textarea>
      <div>
        <button>Add Post</button>
      </div>

      { postsElements }



    </div>



  </div>

}

export default MyPosts;