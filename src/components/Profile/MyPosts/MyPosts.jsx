import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post'

function MyPosts(props) {

  let postsElements = props.postsData.map ( posts => <Post name="Сергей Кондраков" message={posts.message} />)

  let newPost = React.createRef();

  let addPost = () => { 
    let text = newPost.current.value;
    alert(text)
  };

  return <div>
    <div className={classes.mypostscontainer}>
      <textarea ref={newPost} className={classes.textarea}></textarea>
      <div>
        <button onClick={ addPost }>Add Post</button>
      </div>

      { postsElements }



    </div>



  </div>

}

export default MyPosts;