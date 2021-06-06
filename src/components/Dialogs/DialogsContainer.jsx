import React from 'react';
import Dialogs from './Dialogs';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/messages-reducer'


function DialogsContainer(props) {

    let state = props.store.getState().messagesPage;

    let addMessage = () => {
        props.store.dispatch(sendMessageCreator());
    };

    let onMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    };

    return <Dialogs updateNewMessageBody={onMessageChange} sendMessage={addMessage} messagesPage={state}/>
};

export default DialogsContainer;