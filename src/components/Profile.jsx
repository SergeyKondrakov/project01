import React from 'react';
import './Profile.css';

function Profile() {
    return <div className='content'>
      <div className="contentwrapper">
          <img className='backgroundimg' src='https://profile.radidomapro.ru/sites/all/themes/tiger/img/user-bg-ru.jpg'></img>
      </div>    
          
      <div className='profilewrapper'>
        <div>
          <img className='profilepic' src='https://profile.radidomapro.ru/images/membres/auto/165-165-r/436b6b78c41d810d8750b43540a5e129_20181023164748.png'></img>
        </div>
        <div className='userprofile'>
          <p>Сергей Кондраков</p>
          <span>Главный редактор</span><br></br>
          <span>ООО "Кап Инфо Про"</span>
        </div>
      </div>
    
  </div>;
}

export default Profile;