import styles from './MyPosts.module.scss';
import ListPosts from "./ListPosts/ListPosts";
import {PostsType} from "../../../../redux/state";
import React, {ChangeEvent, KeyboardEvent} from "react";
import SuperButton from "../../../Buttons/SuperButton/SuperButton";

type MyPostsPropsType = {
    posts: PostsType[]
    newPostText: string
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

const MyPosts: React.FC<MyPostsPropsType> = ({posts, addPost, newPostText, updateNewPostText}) => {

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const onClickButtonHandler = () => {
        addPost();
    }

    const onPostChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        updateNewPostText(event.currentTarget.value)
    }

    const addPostOnKeyDownHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if(event.key === 'Enter') {
            addPost()
        }
    }

    return (
        <div className={styles.MyPostBlock}>
            <h2>My Posts</h2>
            <div className={styles.SendBlock}>
                <textarea onKeyDown={addPostOnKeyDownHandler} onChange={onPostChange} value={newPostText} ref={newPostElement}
                          placeholder={'Enter Text'}></textarea>
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