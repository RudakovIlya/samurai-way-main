import React from "react";
import styles from './Navbar.module.css';
import icon from './hooli-logo.svg'
import settings from './settings_16.svg'
import home from './home.svg'
import music from './music.svg'
import mes from './message.svg'
import news from './news.svg'

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <li className={`${styles.item} ${styles.active}`}>
                    <img src={home} alt="message"/>
                    <a href={'#s'}>Profile</a>
                </li>
                <li className={styles.item}>
                    <img src={mes} alt="message"/>
                    <a href={'#s'}>Messages</a>
                </li>
                <li className={styles.item}>
                    <img src={news} alt="message"/>
                    <a href={'#s'}>News</a>
                </li>
                <li className={styles.item}>
                    <img src={music} alt="music"/>
                    <a href={'#s'}>Music</a>
                </li>
                <li className={`${styles.item} ${styles.rotate}`}>
                    <img src={settings} alt="settings"/>
                    <a href={'#s'}>Settings</a>
                </li>
            </ul>
        </nav>
    );
};
export default Navbar;