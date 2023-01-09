import {connect} from "react-redux";
import {AppDispatch, AppStateType} from "../../../redux/reduxStore";
import {
    followAC, InitialStateUsersType,
    setCurrentPageAC,
    setTotalCountsAC,
    setUsersAC,
    unFollowAC,
    UserType
} from "../../../redux/UsersReducer";
import {Component} from "react";
import axios from "axios";
import Users from "./Users";
import {Preloader} from "../../Preloader/Preloader";

type mapStateToPropsType = InitialStateUsersType
type mapStateDispatchToPropsType = {
    onClickFollow: (userID: string) => void
    onClickUnFollow: (userID: string) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalCounts: (totalCounts: number) => void
}
type UsersAPIPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    onClickFollow: (userID: string) => void
    onClickUnFollow: (userID: string) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalCounts: (totalCounts: number) => void
}

class UsersAPIComponent extends Component<UsersAPIPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalCounts(response.data.totalCount)
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
        const {
            users, totalUsersCount, currentPage, pageSize,
            onClickFollow,
            onClickUnFollow, isFetching
        } = this.props
        return (
            <>
                {
                    isFetching ? <Users
                        users={users}
                        currentPage={currentPage}
                        pageSize={pageSize}
                        totalUsersCount={totalUsersCount}
                        onPageChanged={this.onPageChanged}
                        onClickFollow={onClickFollow}
                        onClickUnFollow={onClickUnFollow}
                    /> : <Preloader/>
                }
            </>
        )
    }

}

export type UsersPropsType = mapStateToPropsType & mapStateDispatchToPropsType

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

const mapStateDispatchToProps = (dispatch: AppDispatch): mapStateDispatchToPropsType => {
    return {
        onClickFollow: (userID: string) => {
            dispatch(followAC(userID))
        },
        onClickUnFollow: (userID: string) => {
            dispatch(unFollowAC(userID))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalCounts: (totalCounts: number) => {
            dispatch(setTotalCountsAC(totalCounts))
        }
    }
}

export default UsersAPIComponent;

export const UsersContainer = connect(mapStateToProps, mapStateDispatchToProps)(UsersAPIComponent)