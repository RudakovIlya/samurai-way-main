import React from "react";

const Profile = () => {
    return (
        <div className={'content'}>
            <div>
                <img src={"https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"} alt={'content'}/>
            </div>
            <div>ava + description</div>
            <ul>
                my posts
                <li>new post 1</li>
                <li>new post 2</li>
                <li>new post 3</li>
            </ul>
        </div>
    );
};

export default Profile;