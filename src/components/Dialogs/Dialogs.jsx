import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';

function DialogItem(props) {
    let path = "/dialogs/" + props.id
    return <div>
        <NavLink to={path} className={classes.link} activeClassName={classes.activelink}>{props.name}</NavLink>
    </div>
}

function Message(props) {
    return <div>{props.message}</div>
}

function Dialogs() {

    let dialogsData = [
        {id: 1, name: "Xavier Dumoulie" },
        {id: 2, name: "Анастасия Вишникина" },
        {id: 3, name: "Олег Блохин" },
        {id: 4, name: "Анастасия Клименкова" },
    ]

    let messagesData = [
        {id: 1, message: "Быть или не быть - вот в чем вопрос." },
        {id: 2, message: "Мой дядя самых честных правил, когда не в шутку занемог..." },
        {id: 3, message: "Всё смешалось в доме Облонских" },
    ]

    let dialogsElements = dialogsData
        .map( dialog => <DialogItem name={dialog.name} id={dialog.id} />);

    let messagesElements = messagesData
        .map( message => <Message message={message.message} />);

    return (
        <div>
            <div>
                <img className={classes.backgroundimg} src='https://profile.radidomapro.ru/sites/all/themes/tiger/img/user-bg-ru.jpg'></img>
            </div>

            <div className={classes.wrapper}>
                <div className={classes.list}>

                    { dialogsElements }
                </div>
                <div className={classes.messages}>
                    { messagesElements }
                </div>
            </div></div>
    )
};

export default Dialogs;