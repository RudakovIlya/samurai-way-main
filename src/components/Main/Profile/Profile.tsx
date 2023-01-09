import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {FC} from "react";
import MyPosts from "./MyPosts/MyPosts";

export const Profile: FC = () => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts/>
        </div>

    );
};

