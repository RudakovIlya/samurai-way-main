import {follow, InitialStateUsersType, unFollow, UsersReducer} from "../UsersReducer";

let initialState: InitialStateUsersType;

beforeEach(() => {
    initialState = {
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
})

test('correct user must be subscribed', () => {

    const endState: InitialStateUsersType = UsersReducer(initialState, follow('2'))

    expect(endState.users[1].followed).toBeTruthy();

})

test('correct user must be unsubscribed', () => {

    const endState: InitialStateUsersType = UsersReducer(initialState, unFollow('1'))

    expect(endState.users[0].followed).toBeFalsy();

})