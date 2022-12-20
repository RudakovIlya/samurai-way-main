import React, {FC} from 'react';
import {Dialogs} from "./Dialogs";
import {addNewMessage, updateNewMessageTextAC} from "../../../redux/DialogReducer";
import {StoreContext} from "../../../redux/storeContext";

const DialogsContainer: FC = () => {

    return (
        <>
            <StoreContext.Consumer>
                {
                    (store) => {
                        const {dialogPage} = store.getState()
                        const {dispatch} = store;
                        const onNewMessageChange = (messageText: string) => {
                            dispatch(updateNewMessageTextAC(messageText));
                        }

                        const onSendMessageClick = () => {
                            dispatch(addNewMessage(dialogPage.newMessageText));
                        }
                        return <Dialogs
                            dialogPage={dialogPage}
                            updateNewMessage={onNewMessageChange}
                            onSendMessageClick={onSendMessageClick}
                        />
                    }
                }
            </StoreContext.Consumer>
        </>
    )
};

export default DialogsContainer;