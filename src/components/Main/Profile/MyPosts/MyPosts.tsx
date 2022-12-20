import styles from './MyPosts.module.scss';
import ListPosts from "./ListPosts/ListPosts";
import React, {ChangeEvent, KeyboardEvent} from "react";
import SuperButton from "../../../Buttons/SuperButton/SuperButton";
import {PostsType} from "../../../../redux/ProfileReducer";

type MyPostsPropsType = {
    posts: PostsType[]
    newPostText: string
    addPost: (postText: string) => void
    changeNewText: (postText: string) => void
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    const {
        posts,
        newPostText,
        addPost,
        changeNewText
    } = props;


    const onPostChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        changeNewText(event.currentTarget.value)
    }

    const addPostCallBack = () => {
        addPost(newPostText)
    }

    const onKeyDownHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter') {
            addPostCallBack()
        }
    }

    return (
        <div className={styles.posts}>
            <h2>My Posts</h2>
            <div className={styles.send}>
                <textarea onKeyDown={onKeyDownHandler} onChange={onPostChange} value={newPostText}
                          placeholder={'Enter Text'}></textarea>
                <SuperButton className={styles.position} onClick={addPostCallBack} xType={'primary'}
                             buttonSize={'large'}>
                    Add post
                </SuperButton>
            </div>
            <ListPosts posts={posts}/>
        </div>
    );
};

export default MyPosts;