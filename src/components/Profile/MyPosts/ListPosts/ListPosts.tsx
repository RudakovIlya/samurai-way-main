import React from "react";
import classes from './ListPosts.module.css';
import Post from "../Post/Post";


const ListPosts = () => {
    return (
        <ul className={classes.list}>
            <Post/>
            <Post/>
            <Post/>
        </ul>

    );
};

export default ListPosts;