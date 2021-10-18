import { LOGIN_SUCCESS,LOGIN_FAILED, LOGOUT } from "./type";

const initialState = {
    currentUser:null,
    error:""
}

const loginReducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case LOGIN_SUCCESS:
        return { ...state, currentUser:payload };
    case LOGIN_FAILED:
        return { ...state, error:payload };
    case LOGOUT:
        return { ...state, currentUser:payload };
    default:
        return state
    }
}
export default loginReducer
