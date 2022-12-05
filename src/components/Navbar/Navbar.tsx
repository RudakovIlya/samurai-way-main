import React from "react";
import styles from './Navbar.module.scss';
import {NavItem} from "./NavItem/NavItem";
import {SidebarType} from "../../redux/store";
import {Friends} from "./Friends/Friends";

type NavBarPropsType = {
    sidebar: SidebarType
}

const Navbar: React.FC<NavBarPropsType> = ({sidebar: {link, friends}}) => {

    const navItems = link.map((link) => {
        return (
            <NavItem key={link.id} link={link}/>
        )
    });

    const friendsItems = friends.map((friend) => {
        return <Friends key={friend.id} friend={friend}/>
    });
    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                {navItems}
            </ul>
            <ul>
                {friendsItems}
            </ul>
        </nav>
    );
};



export default Navbar;