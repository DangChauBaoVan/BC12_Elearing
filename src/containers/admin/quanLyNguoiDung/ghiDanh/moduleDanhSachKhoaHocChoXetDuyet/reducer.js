import { DANH_SACH_KHOA_HOC_CHO_XET_DUYET } from "./type"

const initialState = {
    danhSachKhoaHocChoXacNhan: []
}

export const danhSachKhoaHocChoXacNhan = (state = initialState, { type, payload }) => {
    switch (type) {

    case DANH_SACH_KHOA_HOC_CHO_XET_DUYET:
        return { ...state, danhSachKhoaHocChoXacNhan: payload }

    default:
        return state
    }
}
