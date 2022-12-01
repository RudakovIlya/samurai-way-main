import React from "react";
import styles from './Main.module.scss'
import {Route} from "react-router-dom";
import {Profile} from "./Profile/Profile";
import {Dialogs} from "./Dialogs/Dialogs";
import {News} from "./News/News";
import {Music} from "./Music/Music";
import {Settings} from "./Settings/Settings";
import {DialogPageType, ProfilePageType} from "../../redux/state";

type MainPropsType = {
    dialogPage: DialogPageType
    profilePage: ProfilePageType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

export const Main: React.FC<MainPropsType> = ({
                                                  profilePage,
                                                  dialogPage,
                                                  addPost,
                                                  updateNewPostText
                                              }) => {

    return (
        <main className={styles.main}>
            <Route path={'/profile'} render={() => <Profile profilePage={profilePage}
                                                            addPost={addPost}
                                                            updateNewPostText={updateNewPostText}/>}/>
            <Route path={'/dialogs'} render={() => <Dialogs dialogPage={dialogPage}/>}/>
            <Route path={'/news'} render={() => <News/>}/>
            <Route path={'/music'} render={() => <Music/>}/>
            <Route path={'/settings'} render={() => <Settings/>}/>
        </main>
    )
}