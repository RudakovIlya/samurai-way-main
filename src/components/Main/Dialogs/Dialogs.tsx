import React, {ChangeEvent} from "react";
import styles from './Dialogs.module.scss'
import {Message} from "./Message/Message";
import {Dialog} from "./Dialog/Dialog";
import {ActionsTypes, addNewMessage, DialogPageType, updateNewMessageTextAC} from "../../../redux/store";
import SuperButton from "../../Buttons/SuperButton/SuperButton";

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

    const onChangeTextAreaValue = (event: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateNewMessageTextAC(event.currentTarget.value));
    }

    const addNewMessageCallback = () => {
        dispatch(addNewMessage(newMessageText));
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
                    <textarea value={newMessageText} onChange={onChangeTextAreaValue} placeholder={'Message'}
                              className={styles.textarea}>

                    </textarea>
                    <SuperButton onClick={addNewMessageCallback} xType={'primary'} buttonSize={'large'}>
                        Send
                    </SuperButton>

                </div>
            </div>
        </div>
    )
};
