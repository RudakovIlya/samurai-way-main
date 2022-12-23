import React, {FC} from 'react';
import {UserType} from "../../../redux/UsersReducer";
import User from "./User/User";
import styles from './Users.module.scss'

type UsersPropsType = {
    users: UserType[]
    onClickFollow: (userID: string) => void
    onClickUnFollow: (userID: string) => void
    setUsers: (users: UserType[]) => void
}

const Users: FC<UsersPropsType> = ({users, onClickUnFollow, onClickFollow}) => {
    const usersItems = users.map(user => {
        return <User key={user.id} user={user} onClickFollow={onClickFollow}
                     onClickUnFollow={onClickUnFollow}/>
    })
    return (
        <section className={styles.users}>
            <header>
                <h2>Users</h2>
                <input type="text"/>
            </header>
            <ul className={styles.list}>
                {usersItems}
            </ul>
        </section>
    );
};

export default Users;