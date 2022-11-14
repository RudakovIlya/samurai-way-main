import styles from './Footer.module.scss'

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <ul className={styles.list}>
                <li className={styles.item}>Hooli&copy; 2022–2200</li>
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