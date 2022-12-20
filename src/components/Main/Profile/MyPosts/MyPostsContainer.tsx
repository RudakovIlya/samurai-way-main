import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addPostAC, changeNewTextAC, PostsType} from "../../../../redux/ProfileReducer";
import {AppStateType} from "../../../../redux/reduxStore";
import {Dispatch} from "redux";

type mapStateToPropsType = {
    posts: PostsType[]
    newPostText: string
}

type mapDispatchToPropsType = {
    addPost: (postText: string) => void
    changeNewText: (postText: string) => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    const {profilePage: {posts, newPostText}} = state
    return {
        posts,
        newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPost: (postText: string) => {
            dispatch(addPostAC(postText))
        },
        changeNewText: (postText: string) => {
            dispatch(changeNewTextAC(postText))
        },
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);