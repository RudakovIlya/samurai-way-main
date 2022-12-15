import {ActionsTypes, ProfilePageType,} from "./store";
import {v1} from "uuid";
import settings from "../assets/icons/settings_16.svg";

export const ProfileReducer = (state: ProfilePageType, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST":
            return {
                ...state, posts: [{
                    id: v1(),
                    message: action.postText.trim(),
                    avatar: settings,
                    likesCount: 0
                }, ...state.posts],
                newPostText: ''
            }
        case "CHANGE-NEW-TEXT":
            return {...state, newPostText: action.newText}
        default:
            return state
    }
};

export const addPostAC = (postText: string) => {
    return {
        type: 'ADD-POST',
        postText
    } as const
}; // AC - Action Creator

export const changeNewTextAC = (newText: string) => {
    return {
        type: 'CHANGE-NEW-TEXT',
        newText
    } as const
}; // AC - Action Creator
