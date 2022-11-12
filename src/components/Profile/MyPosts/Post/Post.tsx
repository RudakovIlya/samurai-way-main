import React from "react";
import styles from './Post.module.scss';

type PostTypePros = {
    message: string,
    avatar: string,
    likesCount: number,
}

const Post = (props: PostTypePros) => {
    return (
        <li className={styles.item}>
            <img src={props.avatar} alt="avatar"/>
            <span>{props.message}</span>
            <div>
                <span>{props.likesCount}</span>
            </div>
        </li>
    );
};

export default Post;