import React from "react";
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img className={classes.image} src={"https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"} alt={'content'}/>
            </div>
            <div>ava + description</div>
            <ul className={classes.list}>
                my posts
                <li className={classes.item}>new post 1</li>
                <li className={classes.item}>new post 2</li>
                <li className={classes.item}>new post 3</li>
            </ul>
        </div>
    );
};

export default Profile;