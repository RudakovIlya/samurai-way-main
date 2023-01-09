import {connect} from "react-redux";
import styles from './Users.module.scss'
import {AppStateType} from "../../../redux/store";
import {
    follow, InitialStateUsersType,
    setCurrentPage,
    setTotalCounts,
    setUsers, toggleIsFetching,
    unFollow,
    UserType
} from "../../../redux/UsersReducer";
import {Component} from "react";
import axios from "axios";
import Users from "./Users";
import {Preloader} from "../../Preloader/Preloader";

type mapStateToPropsType = InitialStateUsersType
type mapStateDispatchToPropsType = {
    follow: () => ReturnType<typeof follow>
    unFollow: () => ReturnType<typeof unFollow>
    setUsers: () => ReturnType<typeof setUsers>
    setCurrentPage: () => ReturnType<typeof setCurrentPage>
    setTotalCounts: () => ReturnType<typeof setTotalCounts>
    toggleIsFetching: () => ReturnType<typeof toggleIsFetching>
}
export type UsersPropsType = mapStateToPropsType & mapStateDispatchToPropsType

type UsersAPIPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    follow: (userID: string) => void
    unFollow: (userID: string) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalCounts: (totalCounts: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

export class UsersAPIComponent extends Component<UsersAPIPropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(false)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalCounts(response.data.totalCount)
                this.props.toggleIsFetching(true)
            })
    }

    onPageChanged = (currentPage: number) => {
        this.props.setCurrentPage(currentPage)
        this.props.toggleIsFetching(false)
        axios(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setUsers(response.data.items)
                this.props.toggleIsFetching(true)
            })
    }

    render() {
        const {
            users, totalUsersCount, currentPage, pageSize, follow, unFollow, isFetching
        } = this.props
        return (
            <section className={styles.users}>
                {
                    isFetching ? <Users
                        users={users}
                        currentPage={currentPage}
                        pageSize={pageSize}
                        totalUsersCount={totalUsersCount}
                        onPageChanged={this.onPageChanged}
                        onClickFollow={follow}
                        onClickUnFollow={unFollow}
                    /> : <Preloader/>
                }
            </section>
        )
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    const {usersPage: {users, totalUsersCount, pageSize, currentPage, isFetching}} = state
    return {
        users,
        totalUsersCount,
        pageSize,
        currentPage,
        isFetching
    }
}

export const UsersContainer = connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalCounts,
    toggleIsFetching,
} as mapStateDispatchToPropsType)(UsersAPIComponent)