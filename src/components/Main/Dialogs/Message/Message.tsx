import React from "react";
import styles from "../Dialogs.module.scss";

export type MessageItemPropsType = {
    id?: string,
    text: string
}

export const Message: React.FC<MessageItemPropsType> = ({
                                                            id,
                                                            text
                                                        }) => {
    return (
        <li id={id} className={styles.MessagesListItem}>{text}</li>
    )
}
