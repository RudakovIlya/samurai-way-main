import React from 'react';
import './App.css';
import {Technologies} from "./components/Technologies/Technologies";
import {Header} from "./components/Header/Header";

const App = () => {
    return (
        <div>
            <Header/>
           <Technologies/>
        </div>
    );
}

export default App;
