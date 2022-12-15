import React from "react";
import styles from './Footer.module.scss'

export const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <ul className={styles.list}>
                <li className={styles.item}>Hooli&copy; {new Date().getFullYear()}</li>
                <li className={styles.item}>
                    <a href="/s">About Hooli</a>
                    <a href="/s">Terms</a>
                    <a href="/s">Developers</a>
                </li>
                <li className={styles.item}>
                    <a href="/s">English</a>
                    <a href="/s">Русский</a>
                    <a href="/s">Українська</a>
                    <a href="/s">all languages &raquo;</a>
                </li>
            </ul>
        </footer>
    )
}