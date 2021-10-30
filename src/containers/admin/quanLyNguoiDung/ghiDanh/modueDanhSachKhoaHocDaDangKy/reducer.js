import { DANH_SACH_KHOA_HOC_DA_GHI_DANH } from "./type";

const initialState = {
  danhSachKhoaHocDaGhiDanh: [],
};

export const danhSachKhoaHocDaGhiDanh = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case DANH_SACH_KHOA_HOC_DA_GHI_DANH:
      return { ...state, danhSachKhoaHocDaGhiDanh: payload };

    default:
      return state;
  }
};
