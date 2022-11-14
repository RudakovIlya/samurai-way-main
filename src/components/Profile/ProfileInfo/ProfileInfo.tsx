import styles from "./ProfileInfo.module.scss";

export const ProfileInfo = () => {
    return (
        <div className={styles.ProfileInfoBlock}>
            <div className={styles.imageBlock}>
                <img className={styles.image}
                     src={"https://img01.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/d/35/d35d7e33e07f4bcbaa1b68379a467263.jpg"}
                     alt={'content'}/>
            </div>
            <div className={styles.Description}>ava + description</div>
        </div>
    )
}