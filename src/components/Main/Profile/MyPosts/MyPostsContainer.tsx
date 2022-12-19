import React from 'react';
import MyPosts from "./MyPosts";
import {addPostAC, changeNewTextAC} from "../../../../redux/ProfileReducer";
import {StoreType} from "../../../../redux/reduxStore";

type MyPostsContainerPropsType = {
    store: StoreType
}

const MyPostsContainer: React.FC<MyPostsContainerPropsType> = ({store}) => {

    const {dispatch} = store;
    const {profilePage: {posts, newPostText}} = store.getState();

    const onPostChange = (text: string) => {
        dispatch(changeNewTextAC(text))
    }

    const addPost = () => {
        dispatch(addPostAC(newPostText))
    }

    return (
        <MyPosts posts={posts} updateNewPostText={onPostChange} newPostText={newPostText} addPost={addPost}/>
    );
};

export default MyPostsContainer;