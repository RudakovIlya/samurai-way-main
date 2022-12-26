import {v1} from "uuid";
import {ActionsTypes} from "./reduxStore";

type UserPhotosType = {
    small: string | null
    large: string | null
}

export type UserType = {
    id: string
    name: string
    photos: UserPhotosType
    status: string
    followed: boolean
}

export type InitialStateType = {
    users: UserType[]
}

const initialState: InitialStateType = {
    users: [
        {
            id: v1(),
            name: 'Ilych',
            followed: true,
            photos: {
                small: 'https://img01.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/d/35/d35d7e33e07f4bcbaa1b68379a467263.jpg',
                large: null
            },
            status: 'Yo!'
        },
        {
            id: v1(),
            name: 'Dimych',
            followed: false,
            photos: {
                small: 'https://img01.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/d/35/d35d7e33e07f4bcbaa1b68379a467263.jpg',
                large: null
            },
            status: 'Yo!'
        },
        {
            id: v1(),
            name: 'Artem',
            followed: true,
            photos: {
                small: 'https://img01.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/d/35/d35d7e33e07f4bcbaa1b68379a467263.jpg',
                large: null
            },
            status: 'Yo!'
        },
        {
            id: v1(),
            name: 'Vasya',
            followed: false,
            photos: {
                small: 'https://img01.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/d/35/d35d7e33e07f4bcbaa1b68379a467263.jpg',
                large: null
            },
            status: 'Yo!'
        },
    ],
};

export const UsersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(stateItem => stateItem.id === action.payload.userID ? {
                    ...stateItem,
                    followed: true
                } : stateItem)
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(stateItem => stateItem.id === action.payload.userID ? {
                    ...stateItem,
                    followed: false
                } : stateItem)
            }
        case "SET-USERS":
            return {
                ...state, users: [...state.users, ...action.payload.users]
            }
        default:
            return state
    }
};

export const followAC = (userID: string) => {
    return {
        type: 'FOLLOW',
        payload: {
            userID
        }
    } as const
}

export const unFollowAC = (userID: string) => {
    return {
        type: 'UNFOLLOW',
        payload: {
            userID
        }
    } as const
}

export const setUsersAC = (users: UserType[]) => {
    return {
        type: 'SET-USERS',
        payload: {
            users
        }
    } as const
}