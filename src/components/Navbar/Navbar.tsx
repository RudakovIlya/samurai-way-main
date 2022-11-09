import React from "react";
import classes from './Navbar.module.css';
import icon from './hooli-logo.svg'

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <ul className={classes.list}>
                <li className={`${classes.item} ${classes.active}`}><a href={'#s'}>Profile</a></li>
                <li className={classes.item}>
                    <img src={icon} alt="message"/>
                    <a href={'#s'}>Messages</a>
                </li>
                <li className={classes.item}>
                    <img src={icon} alt="message"/>
                    <a href={'#s'}>News</a>
                </li>
                <li className={classes.item}>
                    <img src={icon} alt="message"/>
                    <a href={'#s'}>Music</a>
                </li>
                <li className={classes.item}>
                    <img src={icon} alt="message"/>
                    <a href={'#s'}>Settings</a>
                </li>
            </ul>
        </nav>
    );
};
export default Navbar;