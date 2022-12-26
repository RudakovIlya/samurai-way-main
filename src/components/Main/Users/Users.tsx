import React, {FC, useEffect} from 'react';
import {UserType} from "../../../redux/UsersReducer";
import User from "./User/User";
import styles from './Users.module.scss'
import axios from "axios";

type UsersPropsType = {
    users: UserType[]
    onClickFollow: (userID: string) => void
    onClickUnFollow: (userID: string) => void
    setUsers: (users: UserType[]) => void
}

const Users: FC<UsersPropsType> = ({users, onClickUnFollow, onClickFollow, setUsers}) => {

    useEffect(() => {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                setUsers(response.data.items)
                console.log(response.data.items)
            })
    }, [])

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