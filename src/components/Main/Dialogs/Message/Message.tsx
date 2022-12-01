import React from "react";
import styles from "../Dialogs.module.scss";
import {MessagesType} from "../../../../redux/state";

type MessageItemPropsType = {
    message: MessagesType
}

export const Message: React.FC<MessageItemPropsType> = ({message: {id, text}}) => {
    return (
        <li id={id} className={styles.MessagesListItem}>{text}</li>
    )
}
