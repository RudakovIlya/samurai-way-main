import {combineReducers, createStore} from "redux";
import {addPostAC, changeNewTextAC, ProfileReducer} from "./ProfileReducer";
import {addNewMessage, DialogReducer, updateNewMessageTextAC} from "./DialogReducer";
import {SidebarReducer} from "./SidebarReducer";
import {followAC, setUsersAC, unFollowAC, UsersReducer} from "./UsersReducer";

export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewTextAC>
    | ReturnType<typeof updateNewMessageTextAC>
    | ReturnType<typeof addNewMessage>
    | ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>

const rootReducer = combineReducers({
    profilePage: ProfileReducer,
    dialogPage: DialogReducer,
    sidebar: SidebarReducer,
    usersPage: UsersReducer
})

export const store = createStore(rootReducer);

export type AppStateType = ReturnType<typeof store.getState> // type for MapStatePropsType

export type AppDispatch = typeof store.dispatch; // type for MapDispatchToProps
