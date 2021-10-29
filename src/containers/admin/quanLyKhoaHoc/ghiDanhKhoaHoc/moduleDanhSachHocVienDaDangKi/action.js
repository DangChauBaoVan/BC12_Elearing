import { apiNguoiDung } from "assets/apiNguoiDung/apiNguoiDung";
import { DANH_SACH_HOC_VIEN_DA_GHI_DANH } from "./type";

const actDanhSachHocVienDaGhiDanhSuccess = (maKhoaHoc) => ({
    type: DANH_SACH_HOC_VIEN_DA_GHI_DANH,
    payload: maKhoaHoc
})

export const actDanhSachHocVienDaGhiDanh = (maKhoaHoc, accessToken) => {
  return (dispatch) => {
    apiNguoiDung
      .danhSachNguoiDungDaGhiDanh(maKhoaHoc, accessToken)
      .then((res) => {
        dispatch(actDanhSachHocVienDaGhiDanhSuccess(res.data))
    })
      .catch((err) => {
        console.log(err);
      });
  };
};
