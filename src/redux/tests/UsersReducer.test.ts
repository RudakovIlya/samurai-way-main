import {followAC, InitialStateUsersType, unFollowAC, UsersReducer} from "../UsersReducer";

test('correct user must be subscribed', () => {

    const initialState: InitialStateUsersType = {
        users: [
            {
                id: '1',
                name: 'Ilych',
                followed: true,
                photos: {
                    small: 'https://img01.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/d/35/d35d7e33e07f4bcbaa1b68379a467263.jpg',
                    large: null
                },
                status: 'Yo!'
            },
            {
                id: '2',
                name: 'Dimych',
                followed: false,
                photos: {
                    small: 'https://img01.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/d/35/d35d7e33e07f4bcbaa1b68379a467263.jpg',
                    large: null
                },
                status: 'Yo!'
            },
        ],
        pageSize: 0,
        totalUsersCount: 0,
        currentPage: 0,
        isFetching: false
    }


    const endState: InitialStateUsersType = UsersReducer(initialState, followAC('2'))

    expect(endState.users[1].followed).toBeTruthy();

})

test('correct user must be unsubscribed', () => {

    const initialState: InitialStateUsersType = {
        users: [
            {
                id: '1',
                name: 'Ilych',
                followed: true,
                photos: {
                    small: 'https://img01.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/d/35/d35d7e33e07f4bcbaa1b68379a467263.jpg',
                    large: null
                },
                status: 'Yo!'
            },
            {
                id: '2',
                name: 'Dimych',
                followed: false,
                photos: {
                    small: 'https://img01.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/d/35/d35d7e33e07f4bcbaa1b68379a467263.jpg',
                    large: null
                },
                status: 'Yo!'
            },
        ],
        pageSize: 0,
        totalUsersCount: 0,
        currentPage: 0,
        isFetching: false
    }

    const endState: InitialStateUsersType = UsersReducer(initialState, unFollowAC('1'))

    expect(endState.users[0].followed).toBeFalsy();

})