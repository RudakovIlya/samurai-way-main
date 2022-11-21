import React from "react";
import styles from './Navbar.module.scss';
import {NavItem} from "./NavItem/NavItem";
import {SidebarType} from "../../redux/state";
import {Friends} from "./Friends/Friends";

type NavBarPropsType = {
    sidebar: SidebarType
}

const Navbar: React.FC<NavBarPropsType> = ({sidebar: {link, friends}}) => {

    const navItems = link.map(({id, icon, altText, path, linkName}) => {
        return (
            <NavItem key={id} icon={icon} altText={altText} path={path} linkName={linkName}/>
        )
    })

    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                {navItems}
            </ul>
            <ul>

            </ul>
        </nav>
    );
};

export default Navbar;