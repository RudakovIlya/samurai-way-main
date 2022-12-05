import {v1} from "uuid";
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
    newPostText: string
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

/*Dispatch-Actions*/

type AddPostActionType = {
    type: 'ADD-POST'
    postText: string
}
type ChangeNewTextActionType = {
    type: 'CHANGE-NEW-TEXT'
    newText: string
}

export type ActionsTypes = AddPostActionType | ChangeNewTextActionType

/*Store*/

export type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    getState: () => RootStateType
    addPost: () => void
    updateNewPostText: (newText: string) => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsTypes) => void
}

const store: StoreType = {
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
    addPost() {
        // new post
        const newPost: PostsType = {
            id: v1(),
            message: this._state.profilePage.newPostText.trim(),
            avatar: settings,
            likesCount: 0
        }
        // adding new post in posts array
        if (this._state.profilePage.newPostText.trim()) {
            this._state.profilePage.posts.push(newPost);
            // zeroing post text
            this.updateNewPostText('');
            // rerender App  with new data
            this._callSubscriber()
        }
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber()
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer;
    },
    dispatch(action: ActionsTypes) {
        if (action.type === 'ADD-POST') {
            // new post
            const newPost: PostsType = {
                id: v1(),
                message: action.postText.trim(),
                avatar: settings,
                likesCount: 0
            }
            // adding new post in posts array
            if (action.postText.trim()) {
                this._state.profilePage.posts = [newPost, ...this._state.profilePage.posts];
                // zeroing post text
                this._state.profilePage.newPostText = ''
                // rerender App  with new data
                this._callSubscriber()
            }
        } else if (action.type === 'CHANGE-NEW-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber()
        }
    }
}

export default store
