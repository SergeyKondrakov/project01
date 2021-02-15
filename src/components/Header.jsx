import React from 'react';
import './Header.css';

function Header() {
    return <header className='header'>
        <div className='headerwrapper'>
            <div className='logopic'>
                <img src='https://profile.radidomapro.ru/sites/all/modules/custom/reseau/images/site/ru/logo.png'></img>
            </div>
            <div className='access'>
                <div className='accessmenu'>Email</div>
                <div className='accessmenu'>Пароль</div>
                <div className='accessmenu'>Войти</div>
                <div className='accessmenu'>Зарегистрироваться</div>
            </div>
        </div>
    </header>;
}

export default Header;