import { apiNguoiDung } from "assets/apiNguoiDung/apiNguoiDung";
import { DANH_SACH_KHOA_HOC_DA_GHI_DANH } from "./type";

const actDanhSachKhoaHocDaGhiDanhSuccess = (taiKhoan) => ({
  type: DANH_SACH_KHOA_HOC_DA_GHI_DANH,
  payload: taiKhoan,
});

export const actDanhSachKhoaHocDaGhiDanh = (taiKhoan, accessToken) => {
  return (dispatch) => {
    apiNguoiDung
      .danhSachKhoaHocNguoiDungDaGhiDanh(taiKhoan, accessToken)
      .then((res) => {
        dispatch(actDanhSachKhoaHocDaGhiDanhSuccess(res.data))
      })
      .catch((err) => {
        console.log(err.response?.data);
      });
  };
};
