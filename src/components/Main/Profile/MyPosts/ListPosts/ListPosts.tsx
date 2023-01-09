import React from "react";
import styles from './ListPosts.module.scss';
import {Post} from "./Post/Post";
import {useAppSelector} from "../../../../../redux/hooks/hooks";

const ListPosts = () => {

    const posts = useAppSelector((state) => state.profilePage.posts)

    const postItem = posts.map((post) => {
        return (
            <Post key={post.id} post={post}/>
        )
    })

    return (
        <ul className={styles.list}>
            {postItem}
        </ul>
    );
};

export default ListPosts;