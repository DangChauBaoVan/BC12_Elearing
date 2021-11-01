import { DANH_SACH_NGUOI_DUNG_CHUA_GHI_DANH } from "./type";

const initialState = {
  danhSachChuaDangKiKhoaHoc: [],
};

export const danhSachChuaGhiDanhKhoaHoc = (state = initialState, { type, payload }) => {
  switch (type) {
    case DANH_SACH_NGUOI_DUNG_CHUA_GHI_DANH:
      return { ...state, danhSachChuaDangKiKhoaHoc: payload };

    default:
      return state;
  }
};
