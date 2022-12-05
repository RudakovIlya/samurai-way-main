import React from 'react';
import {FriendsType} from "../../../redux/store";

type FriendsPropsType = {
    friend: FriendsType
}

export const Friends: React.FC<FriendsPropsType> = ({friend: {id, name, avatar}}) => {
    return (
        <li key={id}>
            <img src={avatar} alt={name}/>
            <div><a href="/profile">{name}</a></div>
        </li>
    );
};

