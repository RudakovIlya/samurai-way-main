import {v1} from "uuid";
import {addNewMessageAC, DialogReducer, InitialStateType, updateNewMessageTextAC} from "../DialogReducer";

test('new message should be added to the dialog', () => {

    const startState: InitialStateType = {
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
    }

    const newMessageText = 'New Message Text'

    const endState = DialogReducer(startState, addNewMessageAC(newMessageText));

    expect(endState.messages[endState.messages.length - 1].text).toBe(newMessageText)
    expect(endState.messages.length).toBe(startState.messages.length + 1);
    expect(endState.dialogs).toStrictEqual(startState.dialogs)

})

test('correct message text value should be overwritten', () => {

    const startState: InitialStateType = {
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
    }

    const newMessageText = 'New Message Text'

    const endState = DialogReducer(startState, updateNewMessageTextAC(newMessageText));

    expect(endState.newMessageText).toBe(newMessageText)
    expect(startState.newMessageText).toBe('')
})