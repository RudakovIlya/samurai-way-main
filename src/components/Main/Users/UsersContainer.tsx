import {connect} from "react-redux";
import Users from "./Users";
import {AppDispatch, AppStateType} from "../../../redux/reduxStore";
import {followAC, setUsersAC, unFollowAC, UserType} from "../../../redux/UsersReducer";
import UsersClass from "./UsersClass";

type mapStateToPropsType = {
    users: UserType[]
}
type mapStateDispatchToPropsType = {
    onClickFollow: (userID: string) => void
    onClickUnFollow: (userID: string) => void
    setUsers: (users: UserType[]) => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    const {usersPage: {users}} = state
    return {
        users
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
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapStateDispatchToProps)(UsersClass)