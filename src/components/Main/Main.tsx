import React, {FC} from "react";
import styles from './Main.module.scss'
import {Route, Routes} from "react-router-dom";
import {Profile} from "./Profile/Profile";
import {News} from "./News/News";
import {Music} from "./Music/Music";
import {Settings} from "./Settings/Settings";
import {Error} from "../Error/Error";
import {Dialogs} from "./Dialogs/Dialogs";
import {Users} from "./Users/Users";

export const Main: FC = () => {
    return (
        <main className={styles.main}>
            <Routes>
                <Route path={'/profile'} element={<Profile/>}/>
                <Route path={'/dialogs'} element={<Dialogs/>}/>
                <Route path={'/users'} element={<Users/>}/>
                <Route path={'/news'} element={<News/>}/>
                <Route path={'/music'} element={<Music/>}/>
                <Route path={'/settings'} element={<Settings/>}/>
                <Route path={'/*'} element={<Error/>}/>
            </Routes>
        </main>
    )
}