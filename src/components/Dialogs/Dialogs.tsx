import React from "react";
import styles from './Dialogs.module.scss'
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
    return (
        <div className={styles.dialogsContainer}>
            <div className={`${styles.Dialogs} ${styles.column}`}>
                <ul className={`${styles.listDialogs} ${styles.list}`}>
                    <li className={styles.dialog}>
                        <NavLink to={'/dialogs/1'}>Dimych</NavLink>
                    </li>
                    <li className={styles.dialog}>
                        <NavLink to={'/dialogs/2'}>Dimych</NavLink>
                    </li>
                    <li className={styles.dialog}>
                        <NavLink to={'/dialogs/3'}>Dimych</NavLink>
                    </li>
                </ul>
            </div>
            <div className={`${styles.Messages} ${styles.column}`}>
                <ul className={`${styles.listMessages} ${styles.list}`}>
                    <li className={styles.message}>Hello!</li>
                    <li className={styles.message}>Hello!</li>
                    <li className={styles.message}>Hello!</li>
                </ul>
            </div>
        </div>
    )
};