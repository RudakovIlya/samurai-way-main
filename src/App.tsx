import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {Main} from "./components/Main/Main";
import {Footer} from "./components/Footer/Footer";
import {StoreType} from "./redux/store";

type AppType = {
    store: StoreType
}

const App: React.FC<AppType> = ({store}) => {
    const {dispatch} = store
    const {sidebar, profilePage, dialogPage} = store.getState();
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar sidebar={sidebar}/>
            <Main profilePage={profilePage}
                  dispatch={dispatch.bind(store)}
                  dialogPage={dialogPage}
            />
            <Footer/>
        </div>
    );
};
export default App;