import {ActionsTypes,} from "./store";
import {v1} from "uuid";
import settings from "../assets/icons/settings_16.svg";

export type PostsType = {
    id: string,
    message: string,
    avatar: string,
    likesCount: number,
}

export type InitialStateType = {
    posts: PostsType[]
    newPostText: string
}

const initialState: InitialStateType = {
    posts: [
        {
            id: v1(),
            message: 'Hello Everyone',
            avatar: 'https://img01.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/d/35/d35d7e33e07f4bcbaa1b68379a467263.jpg',
            likesCount: 12
        },
        {
            id: v1(),
            message: 'Hello!',
            avatar: 'https://img01.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/d/35/d35d7e33e07f4bcbaa1b68379a467263.jpg',
            likesCount: 123,
        },
        {
            id: v1(),
            message: 'Hello my name is Ilych!',
            avatar: 'https://img01.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/d/35/d35d7e33e07f4bcbaa1b68379a467263.jpg',
            likesCount: 125
        },
        {
            id: v1(),
            message: 'Hello Everyone',
            avatar: 'https://img01.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/d/35/d35d7e33e07f4bcbaa1b68379a467263.jpg',
            likesCount: 12
        },
    ],
    newPostText: ''
}

export const ProfileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
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
