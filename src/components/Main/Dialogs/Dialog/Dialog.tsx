import React, {memo} from "react";
import styles from "./Dialog.module.scss";
import {NavLink} from "react-router-dom";
import {DialogsType} from "../../../../redux/DialogReducer";

type DialogItemPropsType = {
    dialog: DialogsType
}

export const Dialog: React.FC<DialogItemPropsType> = memo((props) => {

    const {dialog: {id, name, avatar}} = props

    return (
        <li className={styles.item}>
            <NavLink activeClassName={styles.active} className={styles.dialog} to={`/dialogs/${id}`}>
                <img src={avatar} alt={`dialog/${name}`}/>
                <div className={styles.description}>
                    <span className={`${styles.name} ${styles.span}`}>{name}</span>
                    <span className={`${styles.text} ${styles.span}`}>text</span>
                </div>
            </NavLink>
        </li>
    )
})

