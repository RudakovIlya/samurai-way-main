import React from "react";
import styles from './Main.module.scss'
import {Route} from "react-router-dom";
import Profile from "./Profile/Profile";
import {Dialogs} from "./Dialogs/Dialogs";
import {News} from "./News/News";
import {Music} from "./Music/Music";
import {Settings} from "./Settings/Settings";

export const Main = () => {

    return (
        <main className={styles.main}>
            <Route path={'/profile'} component={Profile}/>
            <Route path={'/dialogs'} component={Dialogs}/>
            <Route path={'/news'} component={News}/>
            <Route path={'/music'} component={Music}/>
            <Route path={'/settings'} component={Settings}/>
        </main>
    )

}