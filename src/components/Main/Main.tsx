import React from "react";
import styles from './Main.module.scss'
import {Route} from "react-router-dom";
import {Profile} from "./Profile/Profile";
import {News} from "./News/News";
import {Music} from "./Music/Music";
import {Settings} from "./Settings/Settings";
import {StoreType} from "../../redux/reduxStore";
import DialogsContainer from "./Dialogs/DialogsContainer";

type MainPropsType = {
    store: StoreType
}

export const Main: React.FC<MainPropsType> = ({store}) => {

    return (
        <main className={styles.main}>
            <Route path={'/profile'} render={() => <Profile store={store}/>}/>
            <Route path={'/dialogs'} render={() => <DialogsContainer store={store}/>}/>
            <Route path={'/news'} render={() => <News/>}/>
            <Route path={'/music'} render={() => <Music/>}/>
            <Route path={'/settings'} render={() => <Settings/>}/>
        </main>
    )
}