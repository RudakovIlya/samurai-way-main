import React from "react";
import styles from './Dialogs.module.scss'
import {Message} from "./Message/Message";
import {Dialog} from "./Dialog/Dialog";
import {DialogPageType} from "../../../redux/store";
import SuperButton from "../../Buttons/SuperButton/SuperButton";

type DialogsPropsType = {
    dialogPage: DialogPageType
}

export const Dialogs: React.FC<DialogsPropsType> = ({
                                                        dialogPage:
                                                            {
                                                                dialogs,
                                                                messages
                                                            }
                                                    }) => {

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
                    <textarea placeholder={'Message'} className={styles.textarea}>

                    </textarea>
                    <SuperButton onClick={() => alert('Send')} xType={'primary'} buttonSize={'large'}>
                        Send
                    </SuperButton>

                </div>
            </div>
        </div>
    )
};
