import React from "react";
import styles from './ListPosts.module.scss';
import {Post} from "./Post/Post";
import {PostsType} from "../../../../../redux/state";

type ListPropsType = {
    posts: PostsType[]
}

const ListPosts: React.FC<ListPropsType> = ({posts}) => {

    const postItem = posts.map(({id, message, likesCount, avatar}) => {
        return (
            <Post key={id} id={id} message={message} likesCount={likesCount} avatar={avatar}/>
        )
    })

    return (
        <ul className={styles.list}>
            {postItem}
        </ul>
    );
};

export default ListPosts;