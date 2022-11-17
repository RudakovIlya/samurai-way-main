import React from "react";
import styles from "../Dialogs.module.scss";

export type MessageItemType = {
    id: number,
    text: string
}

export const Message: React.FC<MessageItemType> = (props) => {
    return (
        <li className={styles.MessagesListItem}>{props.text}</li>
    )
}
