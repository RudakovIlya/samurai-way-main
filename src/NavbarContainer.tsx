import {connect} from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import {FriendsType, SidebarLinkType} from "./redux/SidebarReducer";
import {AppStateType} from "./redux/reduxStore";

type mapStateToPropsType = {
    link: SidebarLinkType[]
    friends: FriendsType[]
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    const {sidebar: {link, friends}} = state
    return {
        link,
        friends
    }
}

export const NavbarContainer = connect(mapStateToProps)(Navbar);