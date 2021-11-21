import { GET_USER_INFO_FAIL, GET_USER_INFO_SUCCESS } from "./type"

const initialState = {
    userInfo:{},
    err:null
}

const userInfoReducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case GET_USER_INFO_SUCCESS:
        return { ...state, userInfo:payload ,err:null}
    case GET_USER_INFO_FAIL:
        return { ...state,err:payload }

    default:
        return state
    }
}
export default userInfoReducer
