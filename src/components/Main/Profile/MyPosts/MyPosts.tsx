import styles from './MyPosts.module.scss';
import ListPosts from "./ListPosts/ListPosts";
import {PostsType} from "../../../../redux/store";
import React, {ChangeEvent, KeyboardEvent} from "react";
import SuperButton from "../../../Buttons/SuperButton/SuperButton";


type MyPostsPropsType = {
    posts: PostsType[]
    newPostText: string
    addPost: () => void
    updateNewPostText: (text: string) => void
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    const {
        posts,
        newPostText,
        addPost,
        updateNewPostText
    } = props;


    const onPostChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        updateNewPostText(event.currentTarget.value)
    }

    const onKeyDownHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter') {
            addPost()
        }
    }

    return (
        <div className={styles.posts}>
            <h2>My Posts</h2>
            <div className={styles.send}>
                <textarea onKeyDown={onKeyDownHandler} onChange={onPostChange} value={newPostText}
                          placeholder={'Enter Text'}></textarea>
                <SuperButton className={styles.position} onClick={addPost} xType={'primary'}
                             buttonSize={'large'}>
                    Add post
                </SuperButton>
            </div>
            <ListPosts posts={posts}/>
        </div>
    );
};

export default MyPosts;