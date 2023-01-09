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

export type InitialStateUsersType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

const initialState: InitialStateUsersType = {
    users: [],
    pageSize: 15, // кол-во пользователей на странице
    totalUsersCount: 0, // длина массива пришедшего с сервера
    currentPage: 1, // текущая страница
    isFetching: false // статус загрузки
}

export const UsersReducer = (state: InitialStateUsersType = initialState, action: ActionsTypes): InitialStateUsersType => {
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
        case "TOGGLE-IS-FETCHING": {
            return {
                ...state,
                isFetching: action.payload.isFetching
            }
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

export const toggleIsFetchingAC = (isFetching: boolean) => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        payload: {
            isFetching
        }
    } as const
}