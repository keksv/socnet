const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT ='UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'},
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo!'},
        {id: 4, message: 'Yo!'}
    ],
    newMessageText: ''
}

const dialogsReducer =(state =initialState, action) => {
    switch(action.type) {
        case SEND_NEW_MESSAGE:
            let newMessage = state.newMessageText;
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: 5, message: newMessage}]
            };
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newMesText
            };
        default:
            return state;
    }
}

export const sendNewMessageActionCreator = () => ({type: SEND_NEW_MESSAGE})
export const updateNewMessageTextActionCreator =(text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMesText: text})

export default dialogsReducer;