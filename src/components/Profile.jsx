import React from 'react';

function Profile() {
    return <div className='content'>
      <div className="contentwrapper">
          <img className='backgroundimg' src='https://profile.radidomapro.ru/sites/all/themes/tiger/img/user-bg-ru.jpg'></img>
      </div>    
          
      <div className='profilewrapper'>
        <div>
          <img className='profilepic' src='https://profile.radidomapro.ru/images/membres/auto/165-165-r/00b64b0cee5d61954958564cd2858991_20170921132048.png'></img>
        </div>
        <div className='userprofile'>
          <p>Анастасия Клименкова</p>
          <span>Менеджер по B2B-продвижению</span><br></br>
          <span>ООО "Кап Инфо Про"</span>
        </div>
      </div>
    
  </div>;
}

export default Profile;