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
            console.log(updatedUsers, action.payload.userId);

            console.log("deleted State:", {
                users: updatedUsers,
            });
            return {
                ...state,
                users: {...state.users, users: updatedUsers},
            };

        case uc.SET_SEARCH_QUERY:
            const searchQuery = action.payload.query.toLowerCase();
            console.log("searchQuery:", searchQuery);
            console.log("state.users.users:", state.users.users);

            const filteredUsers = state.users.users.filter(
                (user) => user.firstName && user.firstName.toLowerCase().includes(searchQuery)
            );
            console.log("search State:", {
                users: filteredUsers,
            });
            console.log("filteredUsers:", filteredUsers);
            return {
                ...state,

                users: {...state.users, users: filteredUsers},
            };
        case uc.SET_SORT_ORDER:
            const sortedUsers = state.users.users;
            console.log("sorteduser1", sortedUsers);
            sortedUsers.sort((a, b) => {
                if (action.payload.order === "descend") {
                    return a.firstName.localeCompare(b.firstName);
                } else {
                    return b.firstName.localeCompare(a.firstName);
                }
            });
            console.log("sorteduser2", sortedUsers);
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
