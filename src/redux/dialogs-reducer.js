const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE';

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
    ]
}

const dialogsReducer =(state =initialState, action) => {
    switch(action.type) {
        case SEND_NEW_MESSAGE:
            let newMessage = action.newMessageText;
            return {
                ...state,
                messages: [...state.messages, {id: 5, message: newMessage}]
            };
        default:
            return state;
    }
}

export const sendNewMessageActionCreator = (newMessageText) => ({type: SEND_NEW_MESSAGE, newMessageText})

export default dialogsReducer;