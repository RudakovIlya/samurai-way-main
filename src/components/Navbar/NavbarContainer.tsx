import {connect} from "react-redux";
import Navbar from "./Navbar";
import {FriendsType, SidebarLinkType} from "../../redux/SidebarReducer";
import {AppStateType} from "../../redux/store";

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