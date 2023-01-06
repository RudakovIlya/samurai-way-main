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
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

const initialState: InitialStateType = {
    users: [],
    pageSize: 15,
    totalUsersCount: 0,
    currentPage: 1
}

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
                ...state, users: [...action.payload.users]
            }
        case "SET-CURRENT-PAGE":
            return {
                ...state, currentPage: action.payload.currentPage
            }
        case 'SET-TOTAL-COUNTS':
            return {
                ...state,
                totalUsersCount: action.payload.totalCount
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

export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        payload: {
            currentPage
        }
    } as const
}

export const setTotalCountsAC = (totalCount: number) => {
    return {
        type: 'SET-TOTAL-COUNTS',
        payload: {
            totalCount
        }
    } as const
}