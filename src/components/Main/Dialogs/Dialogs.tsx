import React from "react";
import styles from './Dialogs.module.scss'
import {NavLink} from "react-router-dom";

type DialogsItemsType = {
    id: number,
    name: string,
}
type MessagesItemsType = {
    text: string
}

export const Dialogs = () => {
    return (
        <div className={styles.dialogsContainer}>
            <ul className={`${styles.DialogsList}`}>
                <DialogsItem id={1} name={'Dimych'}/>
                <DialogsItem id={2} name={'Ilych'}/>
                <DialogsItem id={3} name={'Yana'}/>
                <DialogsItem id={4} name={'Viktor'}/>
            </ul>
            <ul className={`${styles.MessagesList}`}>
                <MessagesItem text={'Hello'}/>
                <MessagesItem text={'Hi!!'}/>
                <MessagesItem text={'Yo!'}/>
                <MessagesItem text={'It-Kamasutra cool!'}/>
            </ul>
        </div>
    )
};

const DialogsItem: React.FC<DialogsItemsType> = (props) => {
    return (
        <li className={styles.DialogsItem}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </li>
    )
}

/*MessagesList*/

const MessagesItem: React.FC<MessagesItemsType> = (props) => {
    return (
        <li className={styles.MessagesListItem}>{props.text}</li>
    )
}
