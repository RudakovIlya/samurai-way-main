import {combineReducers, createStore} from "redux";
import {ProfileReducer} from "./ProfileReducer";
import {DialogReducer} from "./DialogReducer";
import {SidebarReducer} from "./SidebarReducer";

const rootReducer = combineReducers({
    profilePage: ProfileReducer,
    dialogPage: DialogReducer,
    sidebar: SidebarReducer
})

export const store = createStore(rootReducer);

export type AppStateType = ReturnType<typeof rootReducer>

export type StoreType = typeof store;
