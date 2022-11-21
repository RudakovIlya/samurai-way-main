import React from "react";
import styles from "./Dialog.module.scss";
import {NavLink} from "react-router-dom";

export type DialogItemPropsType = {
    id?: string,
    name: string,
    avatar: string
}

export const Dialog: React.FC<DialogItemPropsType> = ({id, name, avatar}) => {
    return (
        <li className={styles.DialogItem}>
            <NavLink activeClassName={styles.active} className={styles.Dialog} to={`/dialogs/${id}`}>
                <img src={avatar} alt={`dialog/${name}`}/>
                <div className={styles.DialogDescription}>
                    <span className={`${styles.name} ${styles.span}`}>{name}</span>
                    <span className={`${styles.text} ${styles.span}`}>text</span>
                </div>
            </NavLink>
        </li>
    )
}

