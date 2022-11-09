import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img className={classes.image} src={"https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"}
                     alt={'content'}/>
            </div>
            <div>ava + description</div>
           <MyPosts/>
        </div>

    );
};

export default Profile;