import { apiNguoiDung } from "assets/apiNguoiDung/apiNguoiDung";
import { DANH_SACH_KHOA_HOC_NGUOI_DUNG_CHUA_GHI_DANH } from "./type";

const danhSachKHoaHocNguoiDungCHuaGhiDanhSuccess = (data) => ({
  type: DANH_SACH_KHOA_HOC_NGUOI_DUNG_CHUA_GHI_DANH,
  payload: data,
});

export const danhSachKHoaHocNguoiDungCHuaGhiDanhThanhCong = (
  taiKhoan,
  accessToken
) => {
  return (dispatch) => {
    apiNguoiDung
      .danhSachKhoaHocNguoiDungChuaGhiDanh(taiKhoan, accessToken)
      .then((res) => {
        dispatch(danhSachKHoaHocNguoiDungCHuaGhiDanhSuccess(res.data));
      })
      .then((err) => {
        console.log(err);
      });
  };
};
