import styles from './MyPosts.module.scss';
import ListPosts from "./ListPosts/ListPosts";
import {Button} from "../../Button/Button";
import {PostsType} from "../../../../redux/state";
import React from "react";

type MyPostsPropsType = {
    posts: PostsType[]
}

const MyPosts: React.FC<MyPostsPropsType> = ({posts}) => {

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const onClickButtonHandler = () => {
        let text = newPostElement.current?.value
        alert(text)
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