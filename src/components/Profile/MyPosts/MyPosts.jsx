import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post'


function MyPosts(props) {

  let postsElements = props.posts.map(posts => <Post name="Сергей Кондраков" message={posts.message} />)

  let newPost = React.createRef();

  let addPost = () => {
    if (newPost.current.value != "") {
      props.addPost();
    }
  };

  let onPostChange = () => {
    let text = newPost.current.value;
    props.updateNewPostText(text);

  };

  return <div>
    <div className={classes.mypostscontainer}>
      <textarea onChange={onPostChange} ref={newPost} className={classes.textarea}
      value={props.newPostText}></textarea>
      <div>
        <button onClick={addPost}>Add Post</button>
      </div>

      {postsElements}



    </div>



  </div>

}

export default MyPosts;