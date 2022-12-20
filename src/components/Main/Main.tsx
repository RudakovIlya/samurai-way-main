import React, {FC} from "react";
import styles from './Main.module.scss'
import {Route} from "react-router-dom";
import {Profile} from "./Profile/Profile";
import {News} from "./News/News";
import {Music} from "./Music/Music";
import {Settings} from "./Settings/Settings";
import {DialogsContainer} from "./Dialogs/DialogsContainer";

export const Main: FC = () => {
    return (
        <main className={styles.main}>
            <Route path={'/profile'} render={() => <Profile/>}/>
            <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
            <Route path={'/news'} render={() => <News/>}/>
            <Route path={'/music'} render={() => <Music/>}/>
            <Route path={'/settings'} render={() => <Settings/>}/>
        </main>
    )
}