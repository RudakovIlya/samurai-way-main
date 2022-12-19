import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {Main} from "./components/Main/Main";
import {Footer} from "./components/Footer/Footer";
import {RootReducerType} from "./redux/reduxStore";
import {ActionsTypes} from "./redux/store";

type AppType = {
    state: RootReducerType
    dispatch: (action: ActionsTypes) => void
}

const App: React.FC<AppType> = ({state, dispatch}) => {

    const {sidebar, profilePage, dialogPage} = state
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar sidebar={sidebar}/>
            <Main profilePage={profilePage}
                  dispatch={dispatch}
                  dialogPage={dialogPage}
            />
            <Footer/>
        </div>
    );
};
export default App;