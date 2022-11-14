import classes from './MyPosts.module.css';
import ListPosts from "./ListPosts/ListPosts";

const MyPosts = () => {
    return (
        <div>
            <h2>My Posts</h2>
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <ListPosts/>
        </div>
    );
};

export default MyPosts;