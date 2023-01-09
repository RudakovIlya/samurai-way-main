import React from 'react';
import {Outlet} from 'react-router-dom';
import Header from "../Header/Header";
import {Footer} from "../Footer/Footer";
import {NavbarContainer} from "../Navbar/NavbarContainer";
import styles from './Main.module.scss'

const Layout = () => {
    return (
        <>
            <Header/>
            <NavbarContainer/>
            <main className={styles.main}>
                <Outlet/>
            </main>
            <Footer/>
        </>
    );
};

export default Layout;