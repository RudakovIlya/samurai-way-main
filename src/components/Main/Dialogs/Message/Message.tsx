import React, {memo} from "react";
import {MessagesType} from "../../../../redux/DialogReducer";

type MessageItemPropsType = {
    message: MessagesType
}

export const Message: React.FC<MessageItemPropsType> = memo(({message: {id, text}}) => {
    return (
        <li id={id}>{text}</li>
    )
})
