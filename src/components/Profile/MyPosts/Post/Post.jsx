import React from 'react';
import classes from './Post.module.css';

function Post(props) {
    return <div>
      
      <div className={classes.post}>
        <img className={classes.image} src='https://profile.radidomapro.ru/images/membres/auto/165-165-r/436b6b78c41d810d8750b43540a5e129_20181023164748.png'></img>
        <div className={classes.message}>
          <div>{props.name}</div>
          <div>{props.message}</div>
        </div>
      </div>
    </div>     
}

export default Post;