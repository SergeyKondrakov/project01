import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Nav.module.css';

function Nav() {
    return <nav className={classes.nav}>
    <div>
      <NavLink to="/profile" className={classes.link} activeClassName={classes.activelink}>Профиль</NavLink>
    </div>
    <div>
      <NavLink to="/dialogs" className={classes.link} activeClassName={classes.activelink}>Сообщения</NavLink>
    </div>
    <div>
      <a className={classes.link}>Компании</a>
    </div>
    <div>
      <a className={classes.link}>События</a>
    </div>
    <div>
      <a className={classes.link}>Проекты</a>
    </div>
    <div>
      <a className={classes.link}>Пользователи</a>
    </div>
  </nav>;
}

export default Nav;