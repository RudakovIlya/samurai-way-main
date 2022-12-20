import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {Footer} from "./components/Footer/Footer";
import {NavbarContainer} from "./NavbarContainer";


const App: React.FC = () => {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <NavbarContainer />
            <Main/>
            <Footer/>
        </div>
    );
};
export default App;