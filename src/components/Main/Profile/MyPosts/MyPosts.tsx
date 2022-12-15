import styles from './MyPosts.module.scss';
import ListPosts from "./ListPosts/ListPosts";
import {ActionsTypes, addPostAC, changeNewTextAC, PostsType} from "../../../../redux/store";
import React, {ChangeEvent, KeyboardEvent} from "react";
import SuperButton from "../../../Buttons/SuperButton/SuperButton";

type MyPostsPropsType = {
    posts: PostsType[]
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    const {
        posts,
        newPostText,
        dispatch
    } = props;

    const addPost = () => {
        dispatch(addPostAC(newPostText))
    }

    const onPostChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(changeNewTextAC(event.currentTarget.value))
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