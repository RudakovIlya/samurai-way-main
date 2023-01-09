import styles from './Users.module.scss'
import SuperButton from "../../Buttons/SuperButton/SuperButton";
import {FC, memo} from "react";
import User from "./User/User";
import {UserType} from "../../../redux/UsersReducer";

type UsersPropsType = {
    pageSize: number
    totalUsersCount: number
    currentPage: number
    users: UserType[]
    onPageChanged: (currentPage: number) => void
    onClickFollow: (userID: string) => void
    onClickUnFollow: (userID: string) => void
}

const Users: FC<UsersPropsType> = memo((props) => {

    const {users, currentPage, pageSize, totalUsersCount, onPageChanged, onClickUnFollow, onClickFollow} = props;

    const usersItems = users.map(user => {
        return <User
            key={user.id}
            user={user}
            onClickFollow={onClickFollow}
            onClickUnFollow={onClickUnFollow}/>
    })

    const pagesCount = Math.ceil(totalUsersCount / pageSize);

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
                        <SuperButton
                            xType={currentPage === page ? 'primary' : 'outline'} buttonSize={'small'}
                            onClick={() => onPageChanged(page)}
                            key={page}>{page}</SuperButton>
                    )
                })}
            </div>
            <ul className={styles.list}>
                {usersItems}
            </ul>
        </section>
    )


})

export default Users;

