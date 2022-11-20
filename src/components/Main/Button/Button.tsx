import React from "react";

type ButtonPropsType = {
    name: string,
    callBack: () => void
}

export const Button: React.FC<ButtonPropsType> = ({name, callBack}) => {

    const onClickHandler = () => {
        callBack();
    }

    return (
        <button onClick={onClickHandler}>{name}</button>
    )
}