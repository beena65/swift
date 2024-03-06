import {userConstants as uc} from "../constants/actionTypes";
const initialState = {
    users: [],
    loading: false,
    sortOrder: "descend",
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case uc.GET_ALL_USER_DATA_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case uc.GET_ALL_USER_DATA_SUCCESS:
            return {
                ...state,
                users: action.payload.users,
                loading: false,
            };
        case uc.GET_ALL_USER_DATA_FAILURE:
            return {
                ...state,
                loading: false,
            };

        case uc.DELETE_USER:
            const updatedUsers = state.users.users.filter((user) => user.id !== action.payload.userId);

            return {
                ...state,
                users: {...state.users, users: updatedUsers},
            };

        case uc.SET_SEARCH_QUERY:
            const searchQuery = action.payload.query.toLowerCase();

            const filteredUsers = state.users.users.filter(
                (user) => user.firstName && user.firstName.toLowerCase().includes(searchQuery)
            );

            return {
                ...state,

                users: {...state.users, users: filteredUsers},
            };
        case uc.SET_SORT_ORDER:
            const sortedUsers = state.users.users;

            sortedUsers.sort((a, b) => {
                if (action.payload.order === "descend") {
                    return a.firstName.localeCompare(b.firstName);
                } else {
                    return b.firstName.localeCompare(a.firstName);
                }
            });

            return {
                ...state,
                sortOrder: action.payload.order,
                users: {...state.users, users: sortedUsers},
            };
        default:
            return {
                ...state,
            };
    }
};

export default userReducer;
