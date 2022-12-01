import React from "react";
import styles from './ListPosts.module.scss';
import {Post} from "./Post/Post";
import {PostsType} from "../../../../../redux/state";

type ListPropsType = {
    posts: PostsType[]
}

const ListPosts: React.FC<ListPropsType> = ({posts}) => {

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