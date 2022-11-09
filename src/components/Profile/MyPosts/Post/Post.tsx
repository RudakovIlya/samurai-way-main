import React from "react";
import classes from './Post.module.css';

const Post = () => {
    return (
        <li className={classes.item}>
            <img src="https://static.1tv.ru/uploads/photo/image/2/huge/4062_huge_876c41f50e.jpg" alt="avatar"/>
            new post 1
            <div>
                <span>like</span>
            </div>
        </li>
    );
};

export default Post;