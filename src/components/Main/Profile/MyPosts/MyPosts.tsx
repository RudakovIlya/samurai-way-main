import styles from './MyPosts.module.scss';
import ListPosts from "./ListPosts/ListPosts";
import {Button} from "../../Button/Button";
import {PostsType} from "../../../../redux/state";
import React from "react";

type MyPostsPropsType = {
    posts: PostsType[]
    addPost: (postMessage: string, posts: PostsType[]) => void
}

const MyPosts: React.FC<MyPostsPropsType> = ({posts, addPost}) => {

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const onClickButtonHandler = () => {
        const text = newPostElement.current?.value;
        if (text) {
            addPost(text, posts);
        }

    }

    return (
        <div className={styles.MyPostBlock}>
            <h2>My Posts</h2>
            <div className={styles.SendBlock}>
                <textarea ref={newPostElement} placeholder={'Enter Text'}></textarea>
                <Button name={'Add Post'} callBack={onClickButtonHandler}/>
            </div>
            <ListPosts posts={posts}/>
        </div>
    );
};

export default MyPosts;