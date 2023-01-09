import styles from './Users.module.scss'
import SuperButton from "../../Buttons/SuperButton/SuperButton";
import User from "./User/User";
import {useAppDispatch, useAppSelector} from "../../../redux/hooks/hooks";
import {useEffect} from "react";
import axios from "axios";
import {setCurrentPage, setTotalCounts, setUsers, toggleIsFetching} from "../../../redux/UsersReducer";
import {Preloader} from "../../Preloader/Preloader";

export const Users = () => {

    const {users, totalUsersCount, currentPage, pageSize, isFetching} = useAppSelector(state => state.usersPage)

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(toggleIsFetching(false))
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                dispatch(setUsers(response.data.items))
                dispatch(setTotalCounts(response.data.totalCount))
                dispatch(toggleIsFetching(true))
            })

    }, [dispatch, currentPage, pageSize])

    const onPageChanged = (currentPage: number) => {
        dispatch(setCurrentPage(currentPage))
        dispatch(toggleIsFetching(false))
        axios(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
            .then((response) => {
                dispatch(setUsers(response.data.items))
                dispatch(toggleIsFetching(false))
            })
    }

    const usersItems = users.map(user => {
        return <User
            key={user.id}
            user={user}
        />
    })

    const pagesCount = Math.ceil(totalUsersCount / pageSize);

    const pages: number[] = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <section className={styles.users}>
            {isFetching ?
                <>
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
                </>
                : <Preloader/>}
        </section>
    )

}

