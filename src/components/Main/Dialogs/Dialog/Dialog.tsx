import React from "react";
import styles from "../Dialogs.module.scss";
import {NavLink} from "react-router-dom";

export type DialogItemType = {
    id: number,
    name: string,
}

export const Dialog: React.FC<DialogItemType> = (props) => {
    return (
        <li className={styles.DialogsItem}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </li>
    )
}

