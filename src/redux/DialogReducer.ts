import {ActionsTypes, DialogPageType} from "./store";
import {v1} from "uuid";

export const DialogReducer = (state: DialogPageType, action: ActionsTypes): DialogPageType => {
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

export const addNewMessage = (newMessageText: string) => {
    return {
        type: 'ADD-NEW-MESSAGE',
        newMessageText
    } as const
}
