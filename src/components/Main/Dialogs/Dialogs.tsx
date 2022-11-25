import React from "react";
import styles from './Dialogs.module.scss'
import {Message} from "./Message/Message";
import {Dialog} from "./Dialog/Dialog";
import {DialogPageType} from "../../../redux/state";
import SuperButton from "../../Buttons/SuperButton/SuperButton";

type DialogsPropsType = {
    dialogPage: DialogPageType
}

export const Dialogs: React.FC<DialogsPropsType> = ({dialogPage: {dialogs, messages}}) => {

    const dialogsElement = dialogs.map(({id, name, avatar}) => {
        return (
            <Dialog id={id} key={id} name={name} avatar={avatar}/>
        )
    });

    const messagesElement = messages.map((message) => {
        return (
            <Message key={message.id} text={message.text}/>
        )
    })

    return (
        <div className={styles.dialogsContainer}>
            <ul className={`${styles.DialogsList}`}>
                {dialogsElement}
            </ul>
            <div className={styles.MessagesContainer}>
                <ul className={`${styles.MessagesList}`}>
                    {messagesElement}
                </ul>
                <div className={styles.MessagesSendPanel}>
                    <textarea placeholder={'Message'} className={styles.MessagesTexArea}>

                    </textarea>
                    <SuperButton onClick={() => alert('Send')} xType={'primary'} buttonSize={'large'}>
                        Send
                    </SuperButton>

                </div>
            </div>
        </div>
    )
};
