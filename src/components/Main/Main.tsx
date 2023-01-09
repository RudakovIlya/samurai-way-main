import React, {FC} from "react";
import styles from './Main.module.scss'
import {Route, Routes} from "react-router-dom";
import {Profile} from "./Profile/Profile";
import {News} from "./News/News";
import {Music} from "./Music/Music";
import {Settings} from "./Settings/Settings";
import {DialogsContainer} from "./Dialogs/DialogsContainer";
import {UsersContainer} from "./Users/UsersContainer";
import {Error} from "../Error/Error";

export const Main: FC = () => {
    return (
        <main className={styles.main}>
            <Routes>
                <Route path={'/profile'} element={<Profile/>}/>
                <Route path={'/dialogs'} element={<DialogsContainer/>}/>
                <Route path={'/users'} element={<UsersContainer/>}/>
                <Route path={'/news'} element={<News/>}/>
                <Route path={'/music'} element={<Music/>}/>
                <Route path={'/settings'} element={<Settings/>}/>
                <Route path={'/*'} element={<Error/>}/>
            </Routes>
        </main>
    )
}