import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {FC, useEffect} from "react";
import MyPosts from "./MyPosts/MyPosts";
import axios from "axios";
import {useAppDispatch, useAppSelector} from "../../../redux/hooks/hooks";
import {setUserProfileAC} from "../../../redux/ProfileReducer";
import {useParams} from "react-router-dom";
import {Preloader} from "../../Preloader/Preloader";

export const Profile: FC = () => {

    const profile = useAppSelector(state => state.profilePage.profile)

    const dispatch = useAppDispatch();

    const {id} = useParams();

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id ? id : '2'}`)
            .then(response => {
                dispatch(setUserProfileAC(response.data))
            })
    }, [dispatch, id])

    return (
        <div>
            {
                profile ? <>
                        <ProfileInfo/>
                        <MyPosts/>
                    </>
                    :
                    <Preloader/>
            }
        </div>

    );
};

