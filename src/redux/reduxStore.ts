import {combineReducers, compose, createStore} from "redux";
import {addPostAC, changeNewTextAC, ProfileReducer} from "./ProfileReducer";
import {addNewMessage, DialogReducer, updateNewMessageTextAC} from "./DialogReducer";
import {SidebarReducer} from "./SidebarReducer";
import {
    followAC,
    setCurrentPageAC,
    setTotalCountsAC,
    setUsersAC, toggleIsFetchingAC,
    unFollowAC,
    UsersReducer
} from "./UsersReducer";

export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewTextAC>
    | ReturnType<typeof updateNewMessageTextAC>
    | ReturnType<typeof addNewMessage>
    | ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalCountsAC>
    | ReturnType<typeof toggleIsFetchingAC>


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
