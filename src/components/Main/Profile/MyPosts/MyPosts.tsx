import styles from './MyPosts.module.scss';
import ListPosts from "./ListPosts/ListPosts";


const MyPosts = () => {
    return (
        <div className={styles.MyPostBlock}>
            <h2>My Posts</h2>
            <div className={styles.SendBlock}>
                <textarea placeholder={'Enter Text'}></textarea>
                <button>Add post</button>
            </div>
            <ListPosts/>
        </div>
    );
};

export default MyPosts;