import React from 'react';
import {BrowserRouter} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {Main} from "./components/Main/Main";
import {Footer} from "./components/Footer/Footer";
import {StoreType} from "./redux/state";

type AppType = {
    store: StoreType
}

const App: React.FC<AppType> = ({store}) => {
    const {addPost, updateNewPostText,} = store
    const {sidebar, profilePage, dialogPage} = store.getState();
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar sidebar={sidebar}/>
                <Main profilePage={profilePage}
                      addPost={addPost.bind(store)}
                      updateNewPostText={updateNewPostText.bind(store)}
                      dialogPage={dialogPage}
                />
                <Footer/>
            </div>
        </BrowserRouter>
    );
};
export default App;