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
                        const {dialogPage: {dialogs, messages, newMessageText}} = store.getState()
                        const {dispatch} = store;
                        const onNewMessageChange = (messageText: string) => {
                            dispatch(updateNewMessageTextAC(messageText));
                        }

                        const onSendMessageClick = () => {
                            dispatch(addNewMessage(newMessageText));
                        }
                        return <Dialogs
                            newMessageText={newMessageText}
                            dialogs={dialogs}
                            messages={messages}
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