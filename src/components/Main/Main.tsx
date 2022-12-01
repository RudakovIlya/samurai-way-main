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
            <Route path={'samurai-way-main/profile'} render={() => <Profile profilePage={profilePage}
                                                            addPost={addPost}
                                                            updateNewPostText={updateNewPostText}/>}/>
            <Route path={'/samurai-way-main/dialogs'} render={() => <Dialogs dialogPage={dialogPage}/>}/>
            <Route path={'/samurai-way-main/news'} render={() => <News/>}/>
            <Route path={'/samurai-way-main/music'} render={() => <Music/>}/>
            <Route path={'/samurai-way-main/settings'} render={() => <Settings/>}/>
        </main>
    )
}