import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {Main} from "./components/Main/Main";
import {Footer} from "./components/Footer/Footer";
import {StoreType} from "./redux/reduxStore";

type AppType = {
    store: StoreType
}

const App: React.FC<AppType> = ({store}) => {

    const {sidebar} = store.getState()

    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar sidebar={sidebar}/>
            <Main store={store}
            />
            <Footer/>
        </div>
    );
};
export default App;