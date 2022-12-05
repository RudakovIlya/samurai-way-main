import styles from './MyPosts.module.scss';
import ListPosts from "./ListPosts/ListPosts";
import {ActionsTypes, PostsType} from "../../../../redux/store";
import React, {ChangeEvent, KeyboardEvent} from "react";
import SuperButton from "../../../Buttons/SuperButton/SuperButton";

type MyPostsPropsType = {
    posts: PostsType[]
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

const MyPosts: React.FC<MyPostsPropsType> = ({
                                                 posts,
                                                 newPostText,
                                                 dispatch
                                             }) => {

    const addPost = () => {
        dispatch({type: 'ADD-POST', postText: newPostText})
    }

    const onPostChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch({type: 'CHANGE-NEW-TEXT', newText: event.currentTarget.value})
    }

    const addPostOnKeyDownHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter') {
            addPost()
        }
    }

    return (
        <div className={styles.posts}>
            <h2>My Posts</h2>
            <div className={styles.send}>
                <textarea onKeyDown={addPostOnKeyDownHandler} onChange={onPostChange} value={newPostText}
                          placeholder={'Enter Text'}></textarea>
                <SuperButton className={styles.position} onClick={addPost} xType={'primary'}
                             buttonSize={'large'}>
                    Default
                </SuperButton>
            </div>
            <ListPosts posts={posts}/>
        </div>
    );
};

export default MyPosts;