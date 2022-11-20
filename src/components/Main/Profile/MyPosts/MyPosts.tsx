import styles from './MyPosts.module.scss';
import ListPosts from "./ListPosts/ListPosts";
import {Button} from "../../Button/Button";
import {PostsType} from "../../../../redux/state";
import React from "react";

type MyPostsPropsType = {
    posts: PostsType[]
}

const MyPosts: React.FC<MyPostsPropsType> = ({posts}) => {

    return (
        <div className={styles.MyPostBlock}>
            <h2>My Posts</h2>
            <div className={styles.SendBlock}>
                <textarea placeholder={'Enter Text'}></textarea>
                <Button name={'Add Post'} callBack={() => {
                }}/>
            </div>
            <ListPosts posts={posts}/>
        </div>
    );
};

export default MyPosts;