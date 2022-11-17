import React from "react";
import styles from './Dialogs.module.scss'
import {Message, MessageItemType} from "./Message/Message";
import {Dialog, DialogItemType} from "./Dialog/Dialog";


export const Dialogs = () => {

    const dialogsData: Array<DialogItemType> = [
        {id: 1, name: 'Dimych',},
        {id: 2, name: 'Ilych',},
        {id: 3, name: 'Yana',},
        {id: 4, name: 'Viktor',},
    ]

    const messagesData: Array<MessageItemType> = [
        {id: 1, text: 'Hello'},
        {id: 2, text: 'Hi'},
        {id: 3, text: 'Hello my Incubator'},
        {id: 4, text: 'YO!!!!'},
    ]

    const dialogsElement = dialogsData.map((dialog) => {
        return (
            <Dialog key={dialog.id} id={dialog.id} name={dialog.name}/>
        )
    });

    const messagesElement = messagesData.map((message) => {
        return (
            <Message key={message.id} text={message.text} id={message.id}/>
        )
    })

    return (
        <div className={styles.dialogsContainer}>
            <ul className={`${styles.DialogsList}`}>
                {dialogsElement}
            </ul>
            <ul className={`${styles.MessagesList}`}>
                {messagesElement}
            </ul>
        </div>
    )
};
