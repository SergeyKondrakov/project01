import React from 'react';
import classes from './Profile.module.css';

function Profile() {
    return <div className={classes.content}>
      <div className={classes.contentwrapper}>
          <img className={classes.backgroundimg} src='https://profile.radidomapro.ru/sites/all/themes/tiger/img/user-bg-ru.jpg'></img>
      </div>    
          
      <div className={classes.profilewrapper}>
        <div>
          <img className={classes.profilepic} src='https://profile.radidomapro.ru/images/membres/auto/165-165-r/436b6b78c41d810d8750b43540a5e129_20181023164748.png'></img>
        </div>
        <div className={classes.userprofile}>
          <p>Сергей Кондраков</p>
          <span>Главный редактор</span><br></br>
          <span>ООО "Кап Инфо Про"</span>
        </div>
      </div>
    
  </div>;
}

export default Profile;