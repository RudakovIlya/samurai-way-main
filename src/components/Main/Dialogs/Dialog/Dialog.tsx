import React from "react";
import styles from "../Dialogs.module.scss";
import {NavLink} from "react-router-dom";

export type DialogItemPropsType = {
    id: string,
    name: string,
}

export const Dialog: React.FC<DialogItemPropsType> = ({id, name}) => {
    return (
        <li className={styles.DialogsItem}>
            <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
        </li>
    )
}

