import styles from './Profile.module.scss';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsType, ProfilePageType} from "../../../redux/state";
import React from "react";

type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost: (postMessage: string, posts: PostsType[]) => void
}

export const Profile: React.FC<ProfilePropsType> = ({profilePage: {posts}, addPost}) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts} addPost={addPost}/>
        </div>

    );
};

