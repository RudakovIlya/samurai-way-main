import {v1} from "uuid";
import {addPostAC, changeNewTextAC, InitialStateType, ProfileReducer} from "../ProfileReducer";

let startState: InitialStateType;

beforeEach(() => {
    startState = {
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
        newPostText: '',
        profile: {
            aboutMe: 'я круто чувак 1001%',
            contacts: {
                github: '',
                facebook: '',
                instagram: '',
                mainLink: '',
                twitter: '',
                vk: '',
                website: '',
                youtube: ''
            },
            userId: 2,
            fullName: 'Ilya',
            lookingForAJob: true,
            photos: {
                small: '',
                large: ''
            },
            lookingForAJobDescription: 'string'
        }
    };
})

test('new post should be added to the wall', () => {

    const newPostText = 'New Post Text';

    const endState = ProfileReducer(startState, addPostAC(newPostText))

    expect(endState.posts[0].message).toBe(newPostText);
    expect(endState.posts.length).toBe(startState.posts.length + 1);

})

test('correct post text should be update', () => {

    const newPostText = 'New Post Text';

    const endState = ProfileReducer(startState, changeNewTextAC(newPostText))

    expect(endState.newPostText).toBe(newPostText);
    expect(startState.newPostText).toBe('');

})