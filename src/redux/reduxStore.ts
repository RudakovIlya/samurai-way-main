import {combineReducers, createStore} from "redux";
import {addPostAC, changeNewTextAC, ProfileReducer} from "./ProfileReducer";
import {addNewMessage, DialogReducer, updateNewMessageTextAC} from "./DialogReducer";
import {SidebarReducer} from "./SidebarReducer";

export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewTextAC>
    | ReturnType<typeof updateNewMessageTextAC>
    | ReturnType<typeof addNewMessage>

const rootReducer = combineReducers({
    profilePage: ProfileReducer,
    dialogPage: DialogReducer,
    sidebar: SidebarReducer
})

export const store = createStore(rootReducer);

export type AppStateType = ReturnType<typeof rootReducer> // type for MapStatePropsType

export type StoreType = typeof store;
