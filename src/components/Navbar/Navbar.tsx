import styles from './Navbar.module.scss';
import settings from './icons/settings_16.svg';
import home from './icons/home.svg';
import music from './icons/music.svg';
import mes from './icons/message.svg';
import news from './icons/news.svg';
import {NavItem, NavItemPropsType} from "./NavItem/NavItem";

const Navbar = () => {

    const navItemElements: Array<NavItemPropsType> = [
        {
            icon: home,
            altText: 'home',
            path: '/profile',
            linkName: 'Profile'
        },
        {
            icon: mes,
            altText: 'message',
            path: '/dialogs',
            linkName: 'Messages'
        },
        {
            icon: news,
            altText: 'news',
            path: '/news',
            linkName: 'News'
        },
        {
            icon: music,
            altText: 'music',
            path: '/music',
            linkName: 'Music',
        },
        {
            icon: settings,
            altText: 'settings',
            path: '/settings',
            linkName: 'Settings'
        },
    ]

    const navItems = navItemElements.map((item, index) => {
        return (
            <NavItem key={index} icon={item.icon} altText={item.altText} path={item.path} linkName={item.linkName}/>
        )
    })

    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                {navItems}
            </ul>
        </nav>
    );
};

export default Navbar;