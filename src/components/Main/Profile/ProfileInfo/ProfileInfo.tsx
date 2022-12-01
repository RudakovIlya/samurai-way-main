import styles from "./ProfileInfo.module.scss";

export const ProfileInfo = () => {
    return (
        <div className={styles.info}>
            <div className={styles.image}>
                <img
                    src={"https://img01.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/d/35/d35d7e33e07f4bcbaa1b68379a467263.jpg"}
                    alt={'content'}
                />
            </div>
            <div className={styles.description}>ava + description</div>
        </div>
    )
}