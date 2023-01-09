import styles from "./ProfileInfo.module.scss";
import {useAppSelector} from "../../../../redux/hooks/hooks";
import {Error} from "../../../Error/Error";

export const ProfileInfo = () => {

    const profile = useAppSelector(state => state.profilePage.profile)

    if(!profile) {
        return <Error/>
    }

    return (
        <div className={styles.info}>
            <div className={styles.image}>
                <img
                    src={profile.photos.large}
                    alt={'content'}
                />
            </div>
            <div className={styles.description}>{profile.fullName}</div>
        </div>
    )
}