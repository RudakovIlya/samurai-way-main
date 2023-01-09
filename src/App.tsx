import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import {Profile} from "./components/Main/Profile/Profile";
import {Dialogs} from "./components/Main/Dialogs/Dialogs";
import {Users} from "./components/Main/Users/Users";
import {News} from "./components/Main/News/News";
import {Music} from "./components/Main/Music/Music";
import {Settings} from "./components/Main/Settings/Settings";
import {Error} from "./components/Error/Error";

const App: React.FC = () => {
    return (
        <div className={'app-wrapper'}>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'/profile/:id'} element={<Profile/>}/>
                    <Route path={'/dialogs'} element={<Dialogs/>}/>
                    <Route path={'/users'} element={<Users/>}/>
                    <Route path={'/news'} element={<News/>}/>
                    <Route path={'/music'} element={<Music/>}/>
                    <Route path={'/settings'} element={<Settings/>}/>
                    <Route path={'/*'} element={<Error/>}/>
                </Route>
            </Routes>
        </div>
    );
};
export default App;