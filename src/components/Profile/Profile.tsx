import React from "react";
import styles from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img className={styles.image}
                     src={"https://img01.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/d/35/d35d7e33e07f4bcbaa1b68379a467263.jpg"}
                     alt={'content'}/>
            </div>
            <div>ava + description</div>
            <MyPosts/>
        </div>

    );
};

export default Profile;