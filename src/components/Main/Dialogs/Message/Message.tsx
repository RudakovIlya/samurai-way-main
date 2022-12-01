import React from "react";
import {MessagesType} from "../../../../redux/state";

type MessageItemPropsType = {
    message: MessagesType
}

export const Message: React.FC<MessageItemPropsType> = ({message: {id, text}}) => {
    return (
        <li id={id}>{text}</li>
    )
}
