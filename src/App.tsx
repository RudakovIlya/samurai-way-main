import React from 'react';
import './App.css';

const App = () => {
    return (
        <div className={'app-wrapper'}>
            <header className={'header'}>
                <img src='https://cdn-icons-png.flaticon.com/512/179/179337.png' alt={'compass'}/>
            </header>
            <nav className={'nav'}>
                <ul>
                    <li><a href={'#s'}>Profile</a></li>
                    <li><a href={'#s'}>Messages</a></li>
                    <li><a href={'#s'}>News</a></li>
                    <li><a href={'#s'}>Music</a></li>
                    <li><a href={'#s'}>Settings</a></li>
                </ul>
            </nav>
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
        </div>
    );
};

export default App;