import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/messages-reducer'


function Dialogs(props) {

    let buttonStyle = {
        float: "left",
    }

    let textareaStyle = {
        width: "510px",
        height: "100px",
    }

    let state = props.messagesPage;

    let dialogsElements = state.dialogsData
        .map( dialog => <DialogItem name={dialog.name} id={dialog.id} />);

    let messagesElements = state.messagesData
        .map( message => <Message message={message.message} />);

    let addMessage = () => {
        props.sendMessage();
    };

    let onMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body)
    };

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
                    <div>
                        <div><textarea onChange={onMessageChange} value={state.newMessageBody}
                        style={textareaStyle} placeholder="Введите сообщение"></textarea></div>
                        <div><button onClick={addMessage} style={buttonStyle}>Submit</button></div>

                    </div>
                </div>
                
            </div></div>
    )
};

export default Dialogs;