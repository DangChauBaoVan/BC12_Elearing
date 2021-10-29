import { DANH_SACH_KHOA_HOC_NGUOI_DUNG_CHUA_GHI_DANH } from "./type";

const initialState = {
  khoaHocNguoiDungChuaGhiDanh: [],
};

export const danhSachKHoaHocNguoiDungChuaGhiDanhReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case DANH_SACH_KHOA_HOC_NGUOI_DUNG_CHUA_GHI_DANH:
      return { ...state, khoaHocNguoiDungChuaGhiDanh: payload };

    default:
      return state;
  }
};
