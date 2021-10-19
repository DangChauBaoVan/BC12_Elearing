import { GET_ALL_FAIL, GET_ALL_REQUEST, GET_ALL_SUCCESS } from "./type"

const initialState = {
    user: [],
    loading: false,
    error: null
}

const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
    case GET_ALL_REQUEST:
        return { ...state, loading: true}
    case GET_ALL_SUCCESS:
        return { ...state, loading: false, user: payload }
    case GET_ALL_FAIL:
        return { ...state, loading: false, error: payload }

    default:
        return state
    }
}

export default userReducer