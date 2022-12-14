import {combineReducers, compose, createStore} from "redux";
import {addPostAC, changeNewTextAC, ProfileReducer, setUserProfileAC} from "./ProfileReducer";
import {addNewMessageAC, DialogReducer, updateNewMessageTextAC} from "./DialogReducer";
import {SidebarReducer} from "./SidebarReducer";
import {
    follow,
    setCurrentPage,
    setTotalCounts,
    setUsers, toggleIsFetching,
    unFollow,
    UsersReducer
} from "./UsersReducer";

export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewTextAC>
    | ReturnType<typeof updateNewMessageTextAC>
    | ReturnType<typeof addNewMessageAC>
    | ReturnType<typeof follow>
    | ReturnType<typeof unFollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalCounts>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setUserProfileAC>


declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    profilePage: ProfileReducer,
    dialogPage: DialogReducer,
    sidebar: SidebarReducer,
    usersPage: UsersReducer
})

export const store = createStore(rootReducer, composeEnhancers());

export type AppStateType = ReturnType<typeof store.getState> // type for MapStatePropsType

export type AppDispatch = typeof store.dispatch; // type for MapDispatchToProps
