import React from "react";
import classes from './Header.module.css';
import icon from './hooli_logo.svg'

const Header = () => {
    return (
        <header className={classes.header}>
            <img src={icon} alt={'compass'}/>
        </header>
    );
};
export default Header