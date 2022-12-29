import React, {Component} from 'react';
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

class UsersClass extends Component<UsersPropsType> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
                console.log('did mount')
            })
    }

    componentWillUnmount() {
        console.log('will unmount')
    }

    render() {
        const usersItems = this.props.users.map(user => {
            return <User key={user.id} user={user} onClickFollow={this.props.onClickFollow}
                         onClickUnFollow={this.props.onClickUnFollow}/>
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
        )
    }

}

export default UsersClass;

