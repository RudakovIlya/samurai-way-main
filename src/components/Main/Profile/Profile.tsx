import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../../redux/state";
import React from "react";

type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

export const Profile: React.FC<ProfilePropsType> = ({
                                                        profilePage: {posts, newPostText},
                                                        addPost,
                                                        updateNewPostText
                                                    }) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                updateNewPostText={updateNewPostText}
                posts={posts}
                addPost={addPost}
                newPostText={newPostText}
            />
        </div>

    );
};

