import React from "react";
import styles from './Navbar.module.scss';
import {NavItem} from "./NavItem/NavItem";
import {Friends} from "./Friends/Friends";
import {FriendsType, SidebarLinkType} from "../../redux/SidebarReducer";

type NavBarPropsType = {
    link: SidebarLinkType[]
    friends: FriendsType[]
}

const Navbar: React.FC<NavBarPropsType> = (props) => {

    const {link, friends} = props;

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
            <ul className={styles['list-friends']}>
                {friendsItems}
            </ul>
        </nav>
    );
};


export default Navbar;