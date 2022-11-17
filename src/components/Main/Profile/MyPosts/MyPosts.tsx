import styles from './MyPosts.module.scss';
import ListPosts from "./ListPosts/ListPosts";
import {Button} from "../../Button/Button";
import {PostTypePros} from "./Post/Post";


const MyPosts = () => {

    const postData: Array<PostTypePros> = [
        {
            id: 1,
            message: 'Hello',
            avatar: 'https://static.1tv.ru/uploads/photo/image/2/huge/4062_huge_876c41f50e.jpg',
            likesCount: 143,
        },
        {
            id: 2,
            message: 'Hello 1',
            avatar: 'https://static.1tv.ru/uploads/photo/image/2/huge/4062_huge_876c41f50e.jpg',
            likesCount: 143,
        },
        {
            id: 3,
            message: 'Hello 2',
            avatar: 'https://static.1tv.ru/uploads/photo/image/2/huge/4062_huge_876c41f50e.jpg',
            likesCount: 143,
        },
        {
            id: 4,
            message: 'Hello 3',
            avatar: 'https://static.1tv.ru/uploads/photo/image/2/huge/4062_huge_876c41f50e.jpg',
            likesCount: 143,
        }
    ];

    return (
        <div className={styles.MyPostBlock}>
            <h2>My Posts</h2>
            <div className={styles.SendBlock}>
                <textarea placeholder={'Enter Text'}></textarea>
                <Button name={'Add Post'} callBack={() => {
                }}/>
            </div>
            <ListPosts posts={postData}/>
        </div>
    );
};

export default MyPosts;