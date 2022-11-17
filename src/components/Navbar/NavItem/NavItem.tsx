import React from "react";
import home from "../icons/home.svg";
import {NavLink} from "react-router-dom";
import styles from './NavItem.module.scss'


export type NavItemPropsType = {
    icon: string,
    altText: string,
    path: string,
    linkName: string
}

export const NavItem = (props: NavItemPropsType) => {
    return (
        <li className={styles.item}>
            <img src={props.icon} alt={props.altText}/>
            <NavLink to={props.path} activeClassName={styles.activeLink}>{props.linkName}</NavLink>
        </li>
    )
}