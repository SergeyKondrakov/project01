import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './../Dialogs.module.css';

function DialogItem(props) {
    let path = "/dialogs/" + props.id
    return <div>
        <NavLink to={path} className={classes.link} activeClassName={classes.activelink}>{props.name}</NavLink>
    </div>
}

export default DialogItem;