import React from "react";
import styles from './Post.module.scss';

export type PostPropsType = {
    id: string,
    message: string,
    avatar: string,
    likesCount: number,
}

export const Post: React.FC<PostPropsType> = ({id, message, avatar, likesCount}) => {
    return (
        <li className={styles.item}>
            <img src={avatar} alt="avatar"/>
            <span>{message}</span>
            <div>
                <span>{likesCount}</span>
            </div>
        </li>
    );
};
