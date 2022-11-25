import styles from './MyPosts.module.scss';
import ListPosts from "./ListPosts/ListPosts";
import {PostsType} from "../../../../redux/state";
import React from "react";
import SuperButton from "../../../Buttons/SuperButton/SuperButton";

type MyPostsPropsType = {
    posts: PostsType[]
    addPost: (postMessage: string, posts: PostsType[]) => void
}

const MyPosts: React.FC<MyPostsPropsType> = ({posts, addPost}) => {

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const onClickButtonHandler = () => {
        if (newPostElement.current) {
            addPost(newPostElement.current.value, posts);
            newPostElement.current.value = '';
        }
    }

    return (
        <div className={styles.MyPostBlock}>
            <h2>My Posts</h2>
            <div className={styles.SendBlock}>
                <textarea ref={newPostElement} placeholder={'Enter Text'}></textarea>
                <SuperButton className={styles.position} onClick={onClickButtonHandler} xType={'primary'}
                             buttonSize={'large'}>
                    Default
                </SuperButton>
            </div>
            <ListPosts posts={posts}/>
        </div>
    );
};

export default MyPosts;