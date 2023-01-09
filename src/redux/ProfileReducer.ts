import {v1} from "uuid";
import settings from "../assets/icons/settings_16.svg";
import {ActionsTypes} from "./store";

export type ProfileType = {
    aboutMe: string
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string | null
        vk: string | null
        facebook: string | null
        instagram: string | null
        twitter: string | null
        website: string | null
        youtube: string | null
        mainLink: string | null
    }
    photos: {
        small: string
        large: string
    }
}

export type PostsType = {
    id: string,
    message: string,
    avatar: string,
    likesCount: number,
}

export type InitialStateType = {
    posts: PostsType[]
    newPostText: string
    profile: ProfileType
}

const initialState: InitialStateType = {
    posts: [
        {
            id: v1(),
            avatar: 'https://spletnik.ru/cdn-cgi/image/fit=contain,gravity=0.5x0.5,format=auto,width=1011,height=700,dpr=2/https://images.spletnik.ru/i/G/Gv0AwKRHjj/original.jpg',
            message: 'Hello Everyone',
            likesCount: 12
        },
        {
            id: v1(),
            avatar: 'https://spletnik.ru/cdn-cgi/image/fit=contain,gravity=0.5x0.5,format=auto,width=1011,height=700,dpr=2/https://images.spletnik.ru/i/G/Gv0AwKRHjj/original.jpg',
            message: 'Hello!',
            likesCount: 123,
        },
        {
            id: v1(),
            avatar: 'https://spletnik.ru/cdn-cgi/image/fit=contain,gravity=0.5x0.5,format=auto,width=1011,height=700,dpr=2/https://images.spletnik.ru/i/G/Gv0AwKRHjj/original.jpg',
            message: 'Hello my name is Ilych!',
            likesCount: 125
        },
        {
            id: v1(),
            avatar: 'https://spletnik.ru/cdn-cgi/image/fit=contain,gravity=0.5x0.5,format=auto,width=1011,height=700,dpr=2/https://images.spletnik.ru/i/G/Gv0AwKRHjj/original.jpg',
            message: 'Hello Everyone',
            likesCount: 12
        },
    ],
    newPostText: '',
    profile: {
        aboutMe: 'я круто чувак 1001%',
        contacts: {
            github: '',
            facebook: '',
            instagram: '',
            mainLink: '',
            twitter: '',
            vk: '',
            website: '',
            youtube: ''
        },
        userId: 2,
        fullName: 'Ilya',
        lookingForAJob: true,
        photos: {
            small: '',
            large: ''
        },
        lookingForAJobDescription: 'string'
    }
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
        case "SET-USER-PROFILE": {
            return {
                ...state,
                profile: action.payload.profile
            }
        }
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

export const setUserProfileAC = (profile: ProfileType) => {
    return {
        type: 'SET-USER-PROFILE',
        payload: {
            profile
        }
    } as const
}