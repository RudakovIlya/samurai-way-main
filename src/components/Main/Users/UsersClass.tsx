import React, {Component} from 'react';
import {UserType} from "../../../redux/UsersReducer";
import User from "./User/User";
import styles from './Users.module.scss'
import axios from "axios";

type UsersPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onClickFollow: (userID: string) => void
    onClickUnFollow: (userID: string) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalCounts: (totalCounts: number) => void

}

class UsersClass extends Component<UsersPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalCounts(response.data.totalCount)
                console.log('did mount')
            })
    }

    onPageChanged = (currentPage: number) => {
        this.props.setCurrentPage(currentPage)
        axios(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        const usersItems = this.props.users.map(user => {
            return <User key={user.id} user={user} onClickFollow={this.props.onClickFollow}
                         onClickUnFollow={this.props.onClickUnFollow}/>
        })

        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        const pages: number[] = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <section className={styles.users}>
                <header>
                    <h2>Users</h2>
                    <input type="text"/>
                </header>
                <div className={styles.pagination}>
                    {pages.slice(0, 7).map(page => {
                        return (
                            <button onClick={() => this.onPageChanged(page)}
                                    className={this.props.currentPage === page ? styles.selected : ''}
                                    key={page}>{page}</button>
                        )
                    })}
                </div>
                <ul className={styles.list}>
                    {usersItems}
                </ul>
            </section>
        )
    }

}

export default UsersClass;

