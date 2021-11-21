import { DANG_KY_KHOA_HOC_THANH_CONG, DANG_KY_KHOA_HOC_THAT_BAI, GET_COURSE_DETAIL_FAIL, GET_COURSE_DETAIL_SUCCESS } from "./type"

const initialState = {
    courseInfo:{},
    error:null,
    dangKyStatus:{}
}

const courseInfoReducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case GET_COURSE_DETAIL_SUCCESS:
        return { ...state, courseInfo: payload,error: null }
    case GET_COURSE_DETAIL_FAIL:
        return { ...state,error:payload}
    case DANG_KY_KHOA_HOC_THANH_CONG:
        return { ...state, dangKyStatus: payload}
    case DANG_KY_KHOA_HOC_THAT_BAI:
        return { ...state,dangKyStatus: payload}
    default:
        return state
    }
}
export default courseInfoReducer;