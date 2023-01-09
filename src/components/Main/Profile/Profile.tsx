import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {FC, useEffect} from "react";
import MyPosts from "./MyPosts/MyPosts";
import axios from "axios";
import {useAppDispatch} from "../../../redux/hooks/hooks";
import {setUserProfileAC} from "../../../redux/ProfileReducer";
import {useParams} from "react-router-dom";

export const Profile: FC = () => {

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
            <ProfileInfo/>
            <MyPosts/>
        </div>

    );
};

