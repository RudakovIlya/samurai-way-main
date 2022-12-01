import React from "react";
import {NavLink} from "react-router-dom";
import styles from './NavItem.module.scss'
import {SidebarLinkType} from "../../../redux/state";

export type NavItemPropsType = {
    link: SidebarLinkType
}

export const NavItem: React.FC<NavItemPropsType> = ({
                                                        link: {
                                                            id,
                                                            icon,
                                                            altText,
                                                            path,
                                                            linkName
                                                        }
                                                    }) => {
    return (
        <li id={id} className={styles.item}>
            <img src={icon} alt={altText}/>
            <NavLink to={path} activeClassName={styles.active}>{linkName}</NavLink>
        </li>
    )
}