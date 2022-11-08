import React from "react";
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <img src='https://cdn-icons-png.flaticon.com/512/179/179337.png' alt={'compass'}/>
        </header>
    );
};
export default Header