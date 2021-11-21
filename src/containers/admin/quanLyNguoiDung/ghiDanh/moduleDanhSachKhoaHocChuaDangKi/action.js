import { apiNguoiDung } from "apis/apiNguoiDung/apiNguoiDung";
import { DANH_SACH_KHOA_HOC_NGUOI_DUNG_CHUA_GHI_DANH } from "./type";

const actdanhSachKHoaHocNguoiDungCHuaGhiDanhSuccess = (data) => ({
  type: DANH_SACH_KHOA_HOC_NGUOI_DUNG_CHUA_GHI_DANH,
  payload: data,
});

export const actdanhSachKHoaHocNguoiDungCHuaGhiDanh = (
  taiKhoan,
  accessToken
) => {
  return (dispatch) => {
    apiNguoiDung
      .danhSachKhoaHocNguoiDungChuaGhiDanh(taiKhoan, accessToken)
      .then((res) => {
        dispatch(actdanhSachKHoaHocNguoiDungCHuaGhiDanhSuccess(res.data));
      })
      .then((err) => {
        console.log(err);
      });
  };
};
