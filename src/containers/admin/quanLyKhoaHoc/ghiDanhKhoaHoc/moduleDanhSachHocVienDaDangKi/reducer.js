import { DANH_SACH_HOC_VIEN_DA_GHI_DANH } from "./type"

const initialState = {
    danhSachHocVienDaGhiDanh: []
}

export const danhSachHocVienDaGhiDanh = (state = initialState, { type, payload }) => {
    switch (type) {

    case DANH_SACH_HOC_VIEN_DA_GHI_DANH:
        return { ...state, danhSachHocVienDaGhiDanh : payload }

    default:
        return state
    }
}
