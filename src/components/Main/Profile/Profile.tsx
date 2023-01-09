import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {FC} from "react";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

export const Profile: FC = () => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>

    );
};

