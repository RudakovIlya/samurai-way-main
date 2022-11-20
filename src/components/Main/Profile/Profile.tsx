import styles from './Profile.module.scss';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../../redux/state";
import React from "react";

type ProfilePropsType = {
    profilePage: ProfilePageType
}

export const Profile: React.FC<ProfilePropsType> = ({profilePage}) => {
    const {posts} = profilePage
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </div>

    );
};

