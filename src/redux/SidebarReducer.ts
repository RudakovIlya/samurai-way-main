import {ActionsTypes, SidebarType} from "./store";
import {v1} from "uuid";
import home from "../assets/icons/home.svg";
import mes from "../assets/icons/message.svg";
import news from "../assets/icons/news.svg";
import music from "../assets/icons/music.svg";
import settings from "../assets/icons/settings_16.svg";

const initialState: SidebarType = {
    link: [
        {
            id: v1(),
            icon: home,
            altText: 'home',
            path: '/profile',
            linkName: 'Profile'
        },
        {
            id: v1(),
            icon: mes,
            altText: 'message',
            path: '/dialogs',
            linkName: 'Message'
        },
        {
            id: v1(),
            icon: news,
            altText: 'news',
            path: '/news',
            linkName: 'News'
        },
        {
            id: v1(),
            icon: music,
            altText: 'music',
            path: '/music',
            linkName: 'Music',
        },
        {
            id: v1(),
            icon: settings,
            altText: 'settings',
            path: '/settings',
            linkName: 'Settings'
        },
    ],
    friends: [
        {id: v1(), name: 'Dima', avatar: settings},
        {id: v1(), name: 'Ilya', avatar: home},
        {id: v1(), name: 'Yana', avatar: mes},
        {id: v1(), name: 'Andrei', avatar: news},
        {id: v1(), name: 'Dronik', avatar: music},
        {id: v1(), name: 'Mazur', avatar: home},
    ]
};

export const SidebarReducer = (state: SidebarType = initialState, action: ActionsTypes): SidebarType => {
    return state
};

