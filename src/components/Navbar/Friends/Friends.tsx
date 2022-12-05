import React from 'react';
import {FriendsType} from "../../../redux/store";
import styles from './Friends.module.scss'
import {NavLink} from "react-router-dom";

type FriendsPropsType = {
    friend: FriendsType
}

export const Friends: React.FC<FriendsPropsType> = ({friend: {id, name, avatar}}) => {
    return (
        <li key={id} className={styles.item}>
            <NavLink to={'/profile'}>
                <img src={avatar} alt={name}/>
                <div>{name}</div>
            </NavLink>
        </li>
    );
};

