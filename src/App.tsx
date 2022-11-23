import React from 'react';
import {BrowserRouter} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {Main} from "./components/Main/Main";
import {Footer} from "./components/Footer/Footer";
import {PostsType, RootStateType} from "./redux/state";

type AppType = {
    state: RootStateType
    addPost: (postMessage: string, posts: PostsType[]) => void
}

const App: React.FC<AppType> = ({state: {sidebar, profilePage, dialogPage}, addPost}) => {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar sidebar={sidebar}/>
                <Main profilePage={profilePage}
                      addPost={addPost}
                      dialogPage={dialogPage}
                />
                <Footer/>
            </div>
        </BrowserRouter>
    );
};
export default App;