import React from "react";
import styles from './Post.module.scss';
import {PostsType} from "../../../../../../redux/state";

export type PostPropsType = {
    post: PostsType
}

export const Post: React.FC<PostPropsType> = ({post: {id, message, avatar, likesCount}}) => {
    return (
        <li id={`post-id-${id}`} className={styles.item}>
            <img src={avatar} alt="avatar"/>
            <span>{message}</span>
            <div>
                <span>{likesCount}</span>
            </div>
        </li>
    );
};
