/* ProfilePage */

/*export type PostsType = {
    id: string,
    message: string,
    avatar: string,
    likesCount: number,
}

export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
}*/

/*DialogsPage*/

/*export type DialogsType = {
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
    newMessageText: string
}*/

/*Sidebar*/

/*export type FriendsType = {
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
}*/

/*RootState*/

/*export type RootStateType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
    sidebar: SidebarType
}*/

/*Dispatch-Actions*/

/*
export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewTextAC>
    | ReturnType<typeof updateNewMessageTextAC>
    | ReturnType<typeof addNewMessage>
*/

/*Store*/

/*export type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    getState: () => RootStateType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsTypes) => void
}*/

/*const store: StoreType = {
    _state: {
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
            ],
            newPostText: ''
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
            newMessageText: ''
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
                {id: v1(), name: 'Ilya', avatar: home},
                {id: v1(), name: 'Yana', avatar: mes},
                {id: v1(), name: 'Andrei', avatar: news},
                {id: v1(), name: 'Dronik', avatar: music},
                {id: v1(), name: 'Mazur', avatar: home},
            ]
        },
    },
    _callSubscriber() {
    },
    getState() {
        return this._state
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer;
    },
    dispatch(action: ActionsTypes) {
        this._state.profilePage = ProfileReducer(this._state.profilePage, action);
        this._state.dialogPage = DialogReducer(this._state.dialogPage, action);
        this._state.sidebar = SidebarReducer(this._state.sidebar, action);
        this._callSubscriber();
    }
}*/

/*
export default store
*/

export const foo = () => 1;