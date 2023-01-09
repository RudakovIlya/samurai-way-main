import styles from './MyPosts.module.scss';
import ListPosts from "./ListPosts/ListPosts";
import React, {ChangeEvent, KeyboardEvent} from "react";
import SuperButton from "../../../Buttons/SuperButton/SuperButton";
import {useAppDispatch, useAppSelector} from "../../../../redux/hooks/hooks";
import {addPostAC, changeNewTextAC} from "../../../../redux/ProfileReducer";

const MyPosts = () => {

    const dispatch = useAppDispatch();

    const newPostText = useAppSelector(state => state.profilePage.newPostText)

    const onPostChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(changeNewTextAC(event.currentTarget.value))
    }

    const addPostCallBack = () => {
        dispatch(addPostAC(newPostText))
    }

    const onKeyDownHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter') {
            addPostCallBack()
        }
    }

    return (
        <div className={styles.posts}>
            <h2>My Posts</h2>
            <div className={styles.send}>
                <textarea onKeyDown={onKeyDownHandler} onChange={onPostChange} value={newPostText}
                          placeholder={'Enter Text'}></textarea>
                <SuperButton className={styles.position} onClick={addPostCallBack} xType={'primary'}
                             buttonSize={'large'}>
                    Add post
                </SuperButton>
            </div>
            <ListPosts/>
        </div>
    );
};

export default MyPosts;