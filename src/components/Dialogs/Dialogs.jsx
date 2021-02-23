import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


function Dialogs(props) {

    let dialogsElements = props.dialogsData
        .map( dialog => <DialogItem name={dialog.name} id={dialog.id} />);

    let messagesElements = props.messagesData
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