import React from 'react';
import classes from './Post.module.css';

function Post(props) {
    return <div>
      
      <div className={classes.post}>
        <img className={classes.image} src='https://profile.radidomapro.ru/images/membres/auto/165-165-r/609c5e54602900e0bf4778e5f0bb4c79_20170919153659.png'></img>
        <div className={classes.message}>
          <div>{props.name}</div>
          <div>{props.message}</div>
        </div>
      </div>
    </div>     
}

export default Post;