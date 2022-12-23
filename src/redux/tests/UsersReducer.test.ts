import {followAC, InitialStateType, unFollowAC, UsersReducer} from "../UsersReducer";

test('correct user must be subscribed', () => {

    const initialState: InitialStateType = {
        users: [
            {
                id: '1',
                fullName: 'Ilych',
                followed: true,
                avatar: 'https://img01.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/d/35/d35d7e33e07f4bcbaa1b68379a467263.jpg',
                location: {
                    city: 'Minsk',
                    country: 'Belarus'
                },
                status: 'Yo!'
            },
            {
                id: '2',
                fullName: 'Dimych',
                followed: false,
                avatar: 'https://img01.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/d/35/d35d7e33e07f4bcbaa1b68379a467263.jpg',
                location: {
                    city: 'Minsk',
                    country: 'Belarus'
                },
                status: 'Yo!'
            },
        ],
    }


    const endState: InitialStateType = UsersReducer(initialState, followAC('2'))

    expect(endState.users[1].followed).toBeTruthy();

})

test('correct user must be unsubscribed', () => {

    const initialState: InitialStateType = {
        users: [
            {
                id: '1',
                fullName: 'Ilych',
                followed: true,
                avatar: 'https://img01.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/d/35/d35d7e33e07f4bcbaa1b68379a467263.jpg',
                location: {
                    city: 'Minsk',
                    country: 'Belarus'
                },
                status: 'Yo!'
            },
            {
                id: '2',
                fullName: 'Dimych',
                followed: false,
                avatar: 'https://img01.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/d/35/d35d7e33e07f4bcbaa1b68379a467263.jpg',
                location: {
                    city: 'Minsk',
                    country: 'Belarus'
                },
                status: 'Yo!'
            },
        ],
    }


    const endState: InitialStateType = UsersReducer(initialState, unFollowAC('1'))

    expect(endState.users[0].followed).toBeFalsy();

})