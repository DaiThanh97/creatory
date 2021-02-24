import { GET_INFO, SIGN_IN, LOADING_SIGNIN } from "../constants/user.constant";
import { userService } from './../../services/user.service';

const initialState = {
    listInfo: [],
    totalInfo: 0,
    loadingSignIn: false,
}

const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SIGN_IN: {
            // Storage local
            userService.setLoginState(payload);
            state.loadingSignIn = false;
            return { ...state };
        }
        case GET_INFO: {
            const { total, list } = payload;
            return { ...state, listInfo: list, totalInfo: total };
        }
        case LOADING_SIGNIN: {
            return { ...state, loadingSignIn: payload };
        }
        default:
            return state;
    }
};

export default userReducer;
