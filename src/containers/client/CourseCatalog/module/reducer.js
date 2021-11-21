import { GET_COURSE_BY_CATALOG_FAIL, GET_COURSE_BY_CATALOG_REQUEST, GET_COURSE_BY_CATALOG_SUCCESS } from "./type";

const initialState = {
    loading: false,
    error:null,
    danhSachKhoaHoc:[],
}

const courseCatalogReducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case GET_COURSE_BY_CATALOG_REQUEST:
        return { ...state, loading: true, error:null}
    case GET_COURSE_BY_CATALOG_SUCCESS:
        return { ...state, loading: false, danhSachKhoaHoc: payload}
    case GET_COURSE_BY_CATALOG_FAIL:
        return { ...state, loading: false,error: payload}
    default:
        return state
    }
}
export default courseCatalogReducer;
