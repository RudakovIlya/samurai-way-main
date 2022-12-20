import React, {ChangeEvent, KeyboardEvent} from "react";
import styles from './Dialogs.module.scss'
import {Message} from "./Message/Message";
import {Dialog} from "./Dialog/Dialog";
import SuperButton from "../../Buttons/SuperButton/SuperButton";
import {DialogsType, MessagesType} from "../../../redux/DialogReducer";

type DialogsPropsType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageText: string
    updateNewMessage: (messageText: string) => void
    onSendMessageClick: () => void
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const {
        updateNewMessage,
        onSendMessageClick,
        dialogs,
        messages,
        newMessageText
    } = props;

    const dialogsElement = dialogs.map((dialog) => {
        return (
            <Dialog key={dialog.id} dialog={dialog}/>
        )
    });

    const messagesElement = messages.map((message) => {
        return (
            <Message key={message.id} message={message}/>
        )
    })

    const onNewMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => updateNewMessage(event.currentTarget.value)


    const oneEnterTextArea = (event: KeyboardEvent<HTMLTextAreaElement>) => (event.key === 'Enter' && event.shiftKey && onSendMessageClick());


    return (
        <div className={styles.dialogs}>
            <ul className={`${styles.dialogs_list}`}>
                {dialogsElement}
            </ul>
            <div className={styles.messages}>
                <ul className={`${styles.messages_list}`}>
                    {messagesElement}
                </ul>
                <div className={styles.send}>
                    <textarea value={newMessageText} onKeyDown={oneEnterTextArea} onChange={onNewMessageChange}
                              placeholder={'Enter your message'}
                              className={styles.textarea}
                    >

                    </textarea>
                    <SuperButton onClick={onSendMessageClick} xType={'primary'} buttonSize={'large'}>
                        Send
                    </SuperButton>

                </div>
            </div>
        </div>
    )
};
