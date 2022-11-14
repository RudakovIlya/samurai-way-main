import styles from './ListPosts.module.scss';
import Post from "../Post/Post";

const ListPosts = () => {
    return (
        <ul className={styles.list}>
            <Post message={'Hi, how are you?'}
                  avatar={'https://static.1tv.ru/uploads/photo/image/2/huge/4062_huge_876c41f50e.jpg'} likesCount={12}/>
            <Post message={'It`s my first post'}
                  avatar={'https://devby.io/storage/images/59/38/59/11/derived/05ff293929e38a14973ba4cf1c59269d.jpg'}
                  likesCount={13}/>
            <Post message={'Hello everyone!'}
                  avatar={'https://www.iguides.ru/upload/medialibrary/9f8/9f8fdff471b7d281f81f694c100b5adc.png'}
                  likesCount={1}/>
        </ul>

    );
};

export default ListPosts;