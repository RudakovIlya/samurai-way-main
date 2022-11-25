import React from 'react';
import {BrowserRouter} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {Main} from "./components/Main/Main";
import {Footer} from "./components/Footer/Footer";
import {RootStateType} from "./redux/state";

type AppType = {
    state: RootStateType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

const App: React.FC<AppType> = ({state: {sidebar, profilePage, dialogPage}, addPost, updateNewPostText}) => {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar sidebar={sidebar}/>
                <Main profilePage={profilePage}
                      addPost={addPost}
                      updateNewPostText={updateNewPostText}
                      dialogPage={dialogPage}
                />
                <Footer/>
            </div>
        </BrowserRouter>
    );
};
export default App;