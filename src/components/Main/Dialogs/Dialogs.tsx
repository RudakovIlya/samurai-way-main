import React, {ChangeEvent, KeyboardEvent} from "react";
import styles from './Dialogs.module.scss'
import {Message} from "./Message/Message";
import {Dialog} from "./Dialog/Dialog";
import SuperButton from "../../Buttons/SuperButton/SuperButton";
import {
    addNewMessageAC,
    updateNewMessageTextAC
} from "../../../redux/DialogReducer";
import {useAppDispatch, useAppSelector} from "../../../redux/hooks/hooks";

export const Dialogs = () => {

    const dispatch = useAppDispatch();

    const {dialogs, messages, newMessageText} = useAppSelector(state => state.dialogPage)

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

    const onNewMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => dispatch(updateNewMessageTextAC(event.currentTarget.value))

    const callBack = () => dispatch(addNewMessageAC(newMessageText))

    const oneEnterTextArea = (event: KeyboardEvent<HTMLTextAreaElement>) => (event.key === 'Enter' && event.shiftKey && callBack());

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
                    <SuperButton onClick={callBack} xType={'primary'} buttonSize={'large'}>
                        Send
                    </SuperButton>

                </div>
            </div>
        </div>
    )
};
