import quanLyNguoiDungApi from "apis/QuanLyNguoiDung";
import { DANH_SACH_KHOA_HOC_CHO_XET_DUYET } from "./type";

const actDanhSachKhoaHocChoXacNhanSuccess = taiKhoan => ({
  type: DANH_SACH_KHOA_HOC_CHO_XET_DUYET,
  payload: taiKhoan
})

export const actDanhSachKhoaHocChoXacNhan = (taiKhoan, accessToken) => {
  return (dispatch) => {
    quanLyNguoiDungApi
      .danhSachKhoaHocNguoiDungChoXetDuyet(taiKhoan, accessToken)
      .then((res) => {
        dispatch(actDanhSachKhoaHocChoXacNhanSuccess(res.data))
      })
      .catch((err) => {
        console.log(err.response?.data);
      });
  };
};
