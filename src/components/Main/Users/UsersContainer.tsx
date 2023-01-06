import {connect} from "react-redux";
import {AppDispatch, AppStateType} from "../../../redux/reduxStore";
import {
    followAC,
    setCurrentPageAC,
    setTotalCountsAC,
    setUsersAC,
    unFollowAC,
    UserType
} from "../../../redux/UsersReducer";
import UsersClass from "./UsersClass";

type mapStateToPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
type mapStateDispatchToPropsType = {
    onClickFollow: (userID: string) => void
    onClickUnFollow: (userID: string) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalCounts: (totalCounts: number) => void
}

export type UsersPropsType = mapStateToPropsType & mapStateDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    const {usersPage: {users, totalUsersCount, pageSize, currentPage}} = state
    return {
        users,
        totalUsersCount,
        pageSize,
        currentPage
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

export const UsersContainer = connect(mapStateToProps, mapStateDispatchToProps)(UsersClass)