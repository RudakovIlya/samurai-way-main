import React from 'react';
import './App.css';

const App = () => {
    return (
        <div>
            <Header/>
            <Technologies/>
        </div>
    );
};

const Header = () => {
    return (
        <div>
            <a href={'#'}>CSS </a>
            <a href={'#'}>HTML </a>
            <a href={'#'}>JS </a>
            <a href={'#'}>React </a>
        </div>
    );
};

const Technologies = () => {
    return (
        <ul>
            <li>CSS</li>
            <li>HTML</li>
            <li>JS</li>
            <li>React</li>
        </ul>
    )
}

export default App;