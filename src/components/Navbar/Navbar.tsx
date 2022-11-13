import React from "react";
import styles from './Navbar.module.scss';
import settings from './icons/settings_16.svg';
import home from './icons/home.svg';
import music from './icons/music.svg';
import mes from './icons/message.svg';
import news from './icons/news.svg';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <li className={`${styles.item}`}>
                    <img src={home} alt="message"/>
                    <NavLink to={'/profile'} activeClassName={styles.activeLink}>Profile</NavLink>
                </li>
                <li className={styles.item}>
                    <img src={mes} alt="message"/>
                    <NavLink to={'/dialogs'} activeClassName={styles.activeLink}>Messages</NavLink>
                </li>
                <li className={styles.item}>
                    <img src={news} alt="message"/>
                    <NavLink to={'/news'} activeClassName={styles.activeLink}>News</NavLink>
                </li>
                <li className={styles.item}>
                    <img src={music} alt="music"/>
                    <NavLink to={'/music'} activeClassName={styles.activeLink}>Music</NavLink>
                </li>
                <li className={`${styles.item} ${styles.rotate}`}>
                    <img src={settings} alt="settings"/>
                    <NavLink to={'/settings'} activeClassName={styles.activeLink}>Settings</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;