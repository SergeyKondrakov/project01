import React from 'react';
import classes from './Nav.module.css';

function Nav() {
    return <nav className={classes.nav}>
    <div>
      <a>Главная</a>
    </div>
    <div>
      <a>Компании</a>
    </div>
    <div>
      <a>Форум</a>
    </div>
    <div>
      <a>События</a>
    </div>
    <div>
      <a>Проекты</a>
    </div>
    <div>
      <a>Пользователи</a>
    </div>
  </nav>;
}

export default Nav;