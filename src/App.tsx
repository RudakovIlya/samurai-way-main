import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {Main} from "./components/Main/Main";
import {Footer} from "./components/Footer/Footer";
import {StoreContext} from "./redux/storeContext"

const App: React.FC = () => {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <StoreContext.Consumer>
                {(store) => {
                    const {sidebar} = store.getState()
                    return <Navbar sidebar={sidebar}/>
                }
                }
            </StoreContext.Consumer>
            <Main/>
            <Footer/>
        </div>
    );
};
export default App;