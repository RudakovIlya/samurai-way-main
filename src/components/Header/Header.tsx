import React from "react";
import icon from './hooli_logo.svg'
import styles from './Header.module.scss'

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <img src={icon} alt={'compass'}/>
        </header>

    );
};
export default Header