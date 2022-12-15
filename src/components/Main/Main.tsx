import React from "react";
import styles from './Main.module.scss'
import {Route} from "react-router-dom";
import {Profile} from "./Profile/Profile";
import {Dialogs} from "./Dialogs/Dialogs";
import {News} from "./News/News";
import {Music} from "./Music/Music";
import {Settings} from "./Settings/Settings";
import {ActionsTypes, DialogPageType, ProfilePageType} from "../../redux/store";

type MainPropsType = {
    dialogPage: DialogPageType
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypes) => void
}

export const Main: React.FC<MainPropsType> = (props) => {

    const {
        profilePage,
        dialogPage,
        dispatch
    } = props

    return (
        <main className={styles.main}>
            <Route path={'/profile'} render={() => <Profile profilePage={profilePage} dispatch={dispatch}/>}/>
            <Route path={'/dialogs'} render={() => <Dialogs dialogPage={dialogPage} dispatch={dispatch}/>}/>
            <Route path={'/news'} render={() => <News/>}/>
            <Route path={'/music'} render={() => <Music/>}/>
            <Route path={'/settings'} render={() => <Settings/>}/>
        </main>
    )
}