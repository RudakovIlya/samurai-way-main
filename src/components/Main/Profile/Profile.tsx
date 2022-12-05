import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../../redux/store";
import React from "react";

type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypes) => void
}

export const Profile: React.FC<ProfilePropsType> = ({
                                                        profilePage: {
                                                            posts,
                                                            newPostText
                                                        },
                                                        dispatch
                                                    }) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                dispatch={dispatch}
                posts={posts}
                newPostText={newPostText}
            />
        </div>

    );
};

