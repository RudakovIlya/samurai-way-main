import React, {FC} from 'react';
import {Dialogs} from "./Dialogs";
import {StoreType} from "../../../redux/reduxStore";
import {addNewMessage, updateNewMessageTextAC} from "../../../redux/DialogReducer";

type DialogsContainerPropsType = {
    store: StoreType
}

const DialogsContainer: FC<DialogsContainerPropsType> = ({store}) => {
    const {dispatch} = store;

    const {dialogPage} = store.getState()

    const onNewMessageChange = (messageText: string) => {
        dispatch(updateNewMessageTextAC(messageText));
    }

    const onSendMessageClick = () => {
        dispatch(addNewMessage(dialogPage.newMessageText));
    }

    return (
        <>
            <Dialogs
                dialogPage={dialogPage}
                updateNewMessage={onNewMessageChange}
                onSendMessageClick={onSendMessageClick}
            />
        </>
    )
};

export default DialogsContainer;