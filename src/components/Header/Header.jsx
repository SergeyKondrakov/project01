import React from 'react';
import classes from './Header.module.css';

function Header() {
    return <header className={classes.header}>
        <div className={classes.headerwrapper}>
            <div className={classes.logopic}>
                <img src='https://profile.radidomapro.ru/sites/all/modules/custom/reseau/images/site/ru/logo.png'></img>
            </div>
            <div className={classes.access}>
                <div className={classes.accessmenu}>Email</div>
                <div className={classes.accessmenu}>Пароль</div>
                <div className={classes.accessmenu}>Войти</div>
                <div className={classes.accessmenu}>Зарегистрироваться</div>
            </div>
        </div>
    </header>;
}

export default Header;