import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key ={d.id} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} key ={m.id} />)
    let newMessageText = state.newMessageText;

    let sendNewMessage = () => {
        props.sendMessage();
    }

    let onMessageChange = (event) => {
        let text=event.target.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea placeholder='Enter your message' onChange={onMessageChange} value={newMessageText}/></div>
                    <div><button onClick={sendNewMessage}> Send message </button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;