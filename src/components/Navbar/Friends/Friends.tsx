import React, {FC} from 'react';
import styles from './Friends.module.scss'
import {NavLink} from "react-router-dom";
import {FriendsType} from "../../../redux/SidebarReducer";

type FriendsPropsType = {
    friend: FriendsType
}

export const Friends: FC<FriendsPropsType> = (props) => {

    const {friend: {id, name, avatar}} = props

    return (
        <li key={id} className={styles.item}>
            <NavLink to={'/profile'}>
                <img src={avatar} alt={name}/>
                <div>{name}</div>
            </NavLink>
        </li>
    );
};

