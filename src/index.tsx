import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/reduxStore";

const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()} dispatch={store.dispatch}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree();
store.subscribe(rerenderEntireTree);
