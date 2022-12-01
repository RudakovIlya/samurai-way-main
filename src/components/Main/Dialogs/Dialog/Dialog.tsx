import React from "react";
import styles from "./Dialog.module.scss";
import {NavLink} from "react-router-dom";
import {DialogsType} from "../../../../redux/state";

type DialogItemPropsType = {
    dialog: DialogsType
}

export const Dialog: React.FC<DialogItemPropsType> = ({dialog: {id, name, avatar}}) => {
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

