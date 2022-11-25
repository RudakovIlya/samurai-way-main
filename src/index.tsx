import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {addPost, subscribe, updateNewPostText} from "./redux/state";

const rerenderEntireTree = () => {
    console.log('rerenderEntireTree in index')
    ReactDOM.render(
        <App state={state} updateNewPostText={updateNewPostText} addPost={addPost}/>,
        document.getElementById('root')
    );
}
rerenderEntireTree();
subscribe(rerenderEntireTree);
