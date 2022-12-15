import React, {ChangeEvent, KeyboardEvent} from "react";
import styles from './Dialogs.module.scss'
import {Message} from "./Message/Message";
import {Dialog} from "./Dialog/Dialog";
import {ActionsTypes, DialogPageType} from "../../../redux/store";
import SuperButton from "../../Buttons/SuperButton/SuperButton";
import {addNewMessage, updateNewMessageTextAC} from "../../../redux/DialogReducer";

type DialogsPropsType = {
    dialogPage: DialogPageType
    dispatch: (action: ActionsTypes) => void
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const {
        dialogPage:
            {
                dialogs,
                messages,
                newMessageText
            },
        dispatch
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

    const onNewMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateNewMessageTextAC(event.currentTarget.value));
    }

    const onSendMessageClick = () => {
        dispatch(addNewMessage(newMessageText));
    }

    const oneEnterTextArea = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        event.key === 'Enter' && event.shiftKey && onSendMessageClick();
    }

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
