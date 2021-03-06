import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCSESS = 'INITIALIZED_SUCSESS';

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCSESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const initializedSucsess = () => ({type: INITIALIZED_SUCSESS})
export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(() => {
        dispatch(initializedSucsess());
        })

}

export default appReducer;