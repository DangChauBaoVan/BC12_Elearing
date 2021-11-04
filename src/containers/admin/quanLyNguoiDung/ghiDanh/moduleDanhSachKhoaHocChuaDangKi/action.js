import quanLyNguoiDungApi from "apis/QuanLyNguoiDung";
import { DANH_SACH_KHOA_HOC_NGUOI_DUNG_CHUA_GHI_DANH } from "./type";

const actdanhSachKHoaHocNguoiDungChuaGhiDanhSuccess = (data) => ({
  type: DANH_SACH_KHOA_HOC_NGUOI_DUNG_CHUA_GHI_DANH,
  payload: data,
});

export const actdanhSachKHoaHocNguoiDungChuaGhiDanh = (
  taiKhoan,
  accessToken
) => {
  return (dispatch) => {
    quanLyNguoiDungApi
      .danhSachKhoaHocNguoiDungChuaGhiDanh(taiKhoan, accessToken)
      .then((res) => {
        dispatch(actdanhSachKHoaHocNguoiDungChuaGhiDanhSuccess(res.data));
      })
      .then((err) => {
        console.log(err);
      });
  };
};
