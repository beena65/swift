import axios from "axios";
import {userConstants} from "../constants/actionTypes";

export const getUserData = () => {
    console.log("api is trying to fetch");
    return async (dispatch) => {
        dispatch(request());
        try {
            const res1 = await axios.request({
                method: "get",
                url: "https://dummyjson.com/users",
            });

            console.log(res1.data, "is redux working");
            if (res1.status === 200) {
                dispatch(success(res1.data));
            }
        } catch (error) {
            dispatch(failure());
        }
    };

    function request() {
        return {
            type: userConstants.GET_ALL_USER_DATA_REQUEST,
        };
    }

    function success(users) {
        return {
            type: userConstants.GET_ALL_USER_DATA_SUCCESS,
            payload: {users},
        };
    }

    function failure() {
        return {
            type: userConstants.GET_ALL_USER_DATA_FAILURE,
        };
    }
};

export const deleteUser = (userId) => ({
    type: userConstants.DELETE_USER,
    payload: {userId},
});

export const setSearchQuery = (query) => ({
    type: userConstants.SET_SEARCH_QUERY,
    payload: {query},
});
