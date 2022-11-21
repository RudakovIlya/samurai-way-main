import {v1} from "uuid";
import {NavItemPropsType} from "../components/Navbar/NavItem/NavItem";
import home from "../components/Navbar/icons/home.svg";
import mes from "../components/Navbar/icons/message.svg";
import news from "../components/Navbar/icons/news.svg";
import music from "../components/Navbar/icons/music.svg";
import settings from "../components/Navbar/icons/settings_16.svg";

/* ProfilePage */

export type PostsType = {
    id: string,
    message: string,
    avatar: string,
    likesCount: number,
}

export type ProfilePageType = {
    posts: PostsType[]
}

/*DialogsPage*/

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

export type DialogPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}

/*Sidebar*/

export type FriendsType = {
    id: string
    name: string
    avatar: string
}

export type SidebarLinkType = {
    id: string
    icon: string
    altText: string
    path: string
    linkName: string
}

export type SidebarType = {
    link: SidebarLinkType[],
    friends: FriendsType[]
}

/*RootState*/

export type RootStateType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
    sidebar: SidebarType
}

const state: RootStateType = {
    profilePage: {
        posts: [
            {
                id: v1(),
                message: 'Hello Everyone',
                avatar: 'https://img01.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/d/35/d35d7e33e07f4bcbaa1b68379a467263.jpg',
                likesCount: 12
            },
            {
                id: v1(),
                message: 'Hello!',
                avatar: 'https://img01.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/d/35/d35d7e33e07f4bcbaa1b68379a467263.jpg',
                likesCount: 123,
            },
            {
                id: v1(),
                message: 'Hello my name is Ilych!',
                avatar: 'https://img01.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/d/35/d35d7e33e07f4bcbaa1b68379a467263.jpg',
                likesCount: 125
            },
            {
                id: v1(),
                message: 'Hello Everyone',
                avatar: 'https://img01.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/d/35/d35d7e33e07f4bcbaa1b68379a467263.jpg',
                likesCount: 12
            },
        ]
    },
    dialogPage: {
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
    },
    sidebar: {
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
            {id: v1(), name: 'Ilya', avatar: settings},
            {id: v1(), name: 'Yana', avatar: settings},
            {id: v1(), name: 'Andrei', avatar: settings},
        ]
    },
};

export default state
