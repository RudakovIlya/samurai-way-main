import React, {FC, memo} from 'react';
import {follow, unFollow, UserType} from "../../../../redux/UsersReducer";
import SuperButton from "../../../Buttons/SuperButton/SuperButton";
import styles from './User.module.scss'
import icon from '../../../../assets/icons/hooli_logo.svg'
import {NavLink} from "react-router-dom";
import {useAppDispatch} from "../../../../redux/hooks/hooks";

type UserPropsType = {
    user: UserType
}

const User: FC<UserPropsType> = memo(({user,}) => {
    const {id, status, photos, name, followed} = user;
    const dispatch = useAppDispatch();

    const onClickFollowCallback = () => {
        dispatch(follow(id))
    }
    const onClickUnFollowCallback = () => {
        dispatch(unFollow(id))
    }

    return (
        <li className={styles.user}>
            <div className={styles.wrapper}>
                <div className={styles.avatar}>
                    <img src={photos.small ? photos.small : icon} alt={name}/>
                </div>
                <div className={styles.info}>
                    <div className={styles.top}>
                        <NavLink to={`/profile/${id}`} className={styles.name}>{name}</NavLink>
                        <p>
                            <span>{'location.country'}&nbsp;</span>
                            <span>{'location.city'}</span>
                        </p>
                        <p>{status ? status : 'Hi, there!'}</p>
                    </div>
                    <SuperButton onClick={followed ? onClickUnFollowCallback : onClickFollowCallback}
                                 xType={followed ? 'outline' : 'primary'}>
                        {followed ? 'unfollow' : 'follow'}
                    </SuperButton>
                </div>
            </div>
        </li>
    );
});

export default User;