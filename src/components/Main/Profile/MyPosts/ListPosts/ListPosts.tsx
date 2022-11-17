import styles from './ListPosts.module.scss';
import {Post, PostTypePros} from "../Post/Post";

type ListPosts = {
    posts: Array<PostTypePros>
}

const ListPosts = (props: ListPosts) => {

    const postItem = props.posts.map(post => {
        return (
            <Post id={post.id} message={post.message} likesCount={post.likesCount} avatar={post.avatar}/>
        )
    })

    return (
        <ul className={styles.list}>
            {postItem}
        </ul>

    );
};

export default ListPosts;