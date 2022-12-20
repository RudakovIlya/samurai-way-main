import React from 'react';
import MyPosts from "./MyPosts";
import {addPostAC, changeNewTextAC} from "../../../../redux/ProfileReducer";
import {StoreContext} from "../../../../redux/storeContext";

const MyPostsContainer: React.FC = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const {profilePage: {posts, newPostText}} = store.getState();
                    const {dispatch} = store
                    const onPostChange = (text: string) => {
                        dispatch(changeNewTextAC(text))
                    }

                    const addPost = () => {
                        dispatch(addPostAC(newPostText))
                    }
                    return (<MyPosts posts={posts} updateNewPostText={onPostChange}
                                     newPostText={newPostText}
                                     addPost={addPost}/>)
                }
            }
        </StoreContext.Consumer>
    );
};

export default MyPostsContainer;