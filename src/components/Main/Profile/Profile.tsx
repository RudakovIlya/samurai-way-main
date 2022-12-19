import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {StoreType} from "../../../redux/reduxStore";

type ProfilePropsType = {
    store: StoreType

}

export const Profile: React.FC<ProfilePropsType> = ({store}) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={store}/>
        </div>

    );
};

