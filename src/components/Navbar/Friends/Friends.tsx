import React from 'react';

type FriendsPropsType = {
    id: string
    name: string
    avatar: string
}

export const Friends: React.FC<FriendsPropsType> = ({id, name, avatar}) => {
    return (
        <ul>

        </ul>
    );
};

