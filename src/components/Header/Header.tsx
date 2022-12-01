import React from "react";
import icon from './hooli_logo.svg'
import styles from './Header.module.scss'

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <img className={styles.image} src={icon} alt={'hooli-logo'}/>
        </header>

    );
};
export default Header