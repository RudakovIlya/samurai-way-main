import React from "react";
import {NavLink} from "react-router-dom";
import styles from './NavItem.module.scss'
import {SidebarLinkType} from "../../../redux/store";

export type NavItemPropsType = {
    link: SidebarLinkType
}

export const NavItem: React.FC<NavItemPropsType> = (props) => {

    const {
        link: {
            id,
            icon,
            altText,
            path,
            linkName
        }
    } = props

    return (
        <li id={id} className={styles.item}>
            <img src={icon} alt={altText}/>
            <NavLink  to={path} activeClassName={styles.active}>{linkName}</NavLink>
        </li>
    )
}