import { DANH_SACH_NGUOI_DUNG_CHO_XET_DUYET } from "./type";

const initialState = {
    nguoiDungChoXetDuyet: []
};

export const danhSachNguoiDungChoXetDuyet = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case DANH_SACH_NGUOI_DUNG_CHO_XET_DUYET:
      return { ...state, nguoiDungChoXetDuyet: payload };

    default:
      return state;
  }
};
