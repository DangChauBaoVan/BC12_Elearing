import { LAY_DANH_MUC_KHOA_HOC_THANH_CONG, LAY_DANH_MUC_KHOA_HOC_THAT_BAI } from "./type"

const initialState = {
    danhMucKhoaHoc:[],
    error:null,
}

const headerReducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case LAY_DANH_MUC_KHOA_HOC_THANH_CONG:
        return { ...state, danhMucKhoaHoc:payload }
    case LAY_DANH_MUC_KHOA_HOC_THAT_BAI:
        return { ...state, error:payload }
    default:
        return state
    }
}
export default headerReducer;

