import { LAY_DANH_SACH_KHOA_HOC_FAIL, LAY_DANH_SACH_KHOA_HOC_REQUEST, LAY_DANH_SACH_KHOA_HOC_SUCCESS } from "./type"

const initialState = {
    loading: false,
    error:null,
    danhSachKhoaHoc:[],
}

const courseListReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case LAY_DANH_SACH_KHOA_HOC_REQUEST:
            return { ...state, loading: true,error:null}
        case LAY_DANH_SACH_KHOA_HOC_SUCCESS:
            return { ...state, danhSachKhoaHoc: payload,loading: false}
        case LAY_DANH_SACH_KHOA_HOC_FAIL:
            return { ...state, error:payload ,loading: false}
        default:
            return state
    }
}
export default courseListReducer