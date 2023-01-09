import styles from "./ProfileInfo.module.scss";
import {useAppSelector} from "../../../../redux/hooks/hooks";

export const ProfileInfo = () => {

    const profile = useAppSelector(state => state.profilePage.profile)

    return (
        <div className={styles.info}>
            <div className={styles.image}>
                <img
                    src={profile?.photos.large ? profile?.photos.large : 'https://c4.wallpaperflare.com/wallpaper/1001/595/758/movie-zoolander-ben-stiller-derek-zoolander-wallpaper-preview.jpg'}
                    alt={'content'}
                />
            </div>
            <div className={styles.description}>{profile?.fullName}</div>
        </div>
    )
}