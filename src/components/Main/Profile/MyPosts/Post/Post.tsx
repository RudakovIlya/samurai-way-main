import styles from './Post.module.scss';

export type PostTypePros = {
    id: number,
    message: string,
    avatar: string,
    likesCount: number,
}

export const Post = (props: PostTypePros) => {
    return (
        <li className={styles.item}>
            <img src={props.avatar} alt="avatar"/>
            <span>{props.message}</span>
            <div>
                <span>{props.likesCount}</span>
            </div>
        </li>
    );
};
