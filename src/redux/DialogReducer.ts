import {v1} from "uuid";
import {ActionsTypes} from "./store";

export type DialogsType = {
    id: string
    name: string
    avatar: string
}

export type MessagesType = {
    id: string
    text: string
    avatar: string
}

export type InitialStateType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageText: string
}

const initialState: InitialStateType = {
    dialogs: [
        {
            id: v1(),
            name: 'Ilych',
            avatar: 'https://img01.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/d/35/d35d7e33e07f4bcbaa1b68379a467263.jpg'
        },
        {
            id: v1(),
            name: 'Ilych',
            avatar: 'https://img01.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/d/35/d35d7e33e07f4bcbaa1b68379a467263.jpg'
        },
        {
            id: v1(),
            name: 'Ilych',
            avatar: 'https://img01.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/d/35/d35d7e33e07f4bcbaa1b68379a467263.jpg'
        },
        {
            id: v1(),
            name: 'Ilych',
            avatar: 'https://img01.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/d/35/d35d7e33e07f4bcbaa1b68379a467263.jpg'
        },
    ],
    messages: [
        {
            id: v1(),
            text: 'Ilych',
            avatar: '"https://img01.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/d/35/d35d7e33e07f4bcbaa1b68379a467263.jpg"'
        },
        {
            id: v1(),
            text: 'Ilych',
            avatar: '"https://img01.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/d/35/d35d7e33e07f4bcbaa1b68379a467263.jpg"'
        },
        {
            id: v1(),
            text: 'Ilych',
            avatar: '"https://img01.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/d/35/d35d7e33e07f4bcbaa1b68379a467263.jpg"'
        },
        {
            id: v1(),
            text: 'Ilych',
            avatar: '"https://img01.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/d/35/d35d7e33e07f4bcbaa1b68379a467263.jpg"'
        },
    ],
    newMessageText: ''
};

export const DialogReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'ADD-NEW-MESSAGE':
            return {
                ...state,
                messages: [...state.messages, {id: v1(), text: action.newMessageText, avatar: ''}],
                newMessageText: ''
            }
        case 'UPDATE-NEW-MESSAGE':
            return {
                ...state,
                newMessageText: action.newMessage
            }
        default:
            return state
    }
};

export const updateNewMessageTextAC = (newMessage: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE',
        newMessage
    } as const
}

export const addNewMessageAC = (newMessageText: string) => {
    return {
        type: 'ADD-NEW-MESSAGE',
        newMessageText
    } as const
}
