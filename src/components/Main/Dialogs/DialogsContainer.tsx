import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/reduxStore";
import {addNewMessage, DialogsType, MessagesType, updateNewMessageTextAC} from "../../../redux/DialogReducer";
import {Dispatch} from "redux";

type mapStateToPropsType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageText: string
}

type mapDispatchToPropsType = {
    addNewMessage: (newMessageText: string) => void
    updateNewMessage: (messageText: string) => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    const {dialogPage: {dialogs, messages, newMessageText}} = state
    return {
        dialogs,
        messages,
        newMessageText
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addNewMessage: (messageText: string) => {
            dispatch(addNewMessage(messageText));
        },
        updateNewMessage: (messageText: string) => {
            dispatch(updateNewMessageTextAC(messageText))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)