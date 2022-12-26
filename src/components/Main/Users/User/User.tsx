import React, {FC} from 'react';
import {UserType} from "../../../../redux/UsersReducer";
import SuperButton from "../../../Buttons/SuperButton/SuperButton";
import styles from './User.module.scss'
import icon from '../../../../assets/icons/hooli_logo.svg'

type UserPropsType = {
    user: UserType
    onClickFollow: (userID: string) => void
    onClickUnFollow: (userID: string) => void
}

const User: FC<UserPropsType> = ({user, onClickUnFollow, onClickFollow}) => {
    const {id, status, photos, name, followed} = user;

    const onClickFollowCallback = () => {
        onClickFollow(id)
    }
    const onClickUnFollowCallback = () => {
        onClickUnFollow(id)
    }

    return (
        <li className={styles.user}>
            <div className={styles.wrapper}>
                <div className={styles.avatar}>
                    <img src={photos.small ? photos.small : icon} alt={name}/>
                </div>
                <div className={styles.info}>
                    <h4 className={styles.name}>{name}</h4>
                    <p>
                        <span>{'location.country'}&nbsp;</span>
                        <span>{'location.city'}</span>
                    </p>
                    <p>{status}</p>
                    <SuperButton onClick={followed ? onClickUnFollowCallback : onClickFollowCallback}
                                 xType={followed ? 'outline' : 'primary'}>
                        {followed ? 'unfollow' : 'follow'}
                    </SuperButton>
                </div>
            </div>
        </li>
    );
};

export default User;