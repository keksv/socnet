import React from 'react';
import {sendNewMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

let mapStateProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageText) => {
            dispatch(sendNewMessageActionCreator(newMessageText));
        },
    }
}

export default compose(
    connect(mapStateProps, mapDispatchToProps),
    withAuthRedirect
) (Dialogs);