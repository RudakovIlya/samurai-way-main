import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppDispatch, AppStateType} from "../../../redux/store";
import {addNewMessage, DialogsType, MessagesType, updateNewMessageTextAC} from "../../../redux/DialogReducer";

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

const mapDispatchToProps = (dispatch: AppDispatch): mapDispatchToPropsType => {
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