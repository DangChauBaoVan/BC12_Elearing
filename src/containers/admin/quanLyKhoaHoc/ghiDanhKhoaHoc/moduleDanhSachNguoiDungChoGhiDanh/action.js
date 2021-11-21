import quanLyNguoiDungApi from "apis/QuanLyNguoiDung";
import { DANH_SACH_NGUOI_DUNG_DA_GHI_DANH } from "./type";

//action danh sách người dùng chờ xét duyệt (success)
const actDanhSachNguoiDungChoGhiDanhSuccess = (data) => ({
  type: DANH_SACH_NGUOI_DUNG_DA_GHI_DANH,
  payload: data,
});
// action danh sách người dùng chờ xét duyệt
export const actDanhSachNguoiDungChoGhiDanh = (maKkhoaHoc, accessToken) => {
  return (dispatch) => {
    quanLyNguoiDungApi
      .danhSachNguoiDungChoDangKy(maKkhoaHoc, accessToken)
      .then((res) => {
        dispatch(actDanhSachNguoiDungChoGhiDanhSuccess(res.data));
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
};
