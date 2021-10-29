import { DANH_SACH_NGUOI_DUNG_CHUA_DK_S } from "./type";

const initialState = {
  danhSachChuaDangKiKhoaHoc: [],
};

export const danhSachChuaDangKiKhoaHoc = (state = initialState, { type, payload }) => {
  switch (type) {
    case DANH_SACH_NGUOI_DUNG_CHUA_DK_S:
      return { ...state, danhSachChuaDangKiKhoaHoc: payload };

    default:
      return state;
  }
};
