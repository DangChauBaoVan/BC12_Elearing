import { DANH_SACH_NGUOI_DUNG_DA_GHI_DANH } from "./type";

const initialState = {
    nguoiDungDaGhiDanh: []
};

export const danhSachNguoiDungChoGhiDanh = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case DANH_SACH_NGUOI_DUNG_DA_GHI_DANH:
      return { ...state, nguoiDungDaGhiDanh: payload };

    default:
      return state;
  }
};
