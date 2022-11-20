import React from "react";
import {NavLink} from "react-router-dom";
import styles from './NavItem.module.scss'

export type NavItemPropsType = {
    id?: string
    icon: string,
    altText: string,
    path: string,
    linkName: string
}

export const NavItem: React.FC<NavItemPropsType> = ({id, icon, altText, path, linkName}) => {
    return (
        <li id={id} className={styles.item}>
            <img src={icon} alt={altText}/>
            <NavLink to={path} activeClassName={styles.activeLink}>{linkName}</NavLink>
        </li>
    )
}