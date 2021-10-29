import {
  DANH_SACH_NGUOI_DUNG_CHUA_DK_S,
} from "./type";
import { apiNguoiDung } from "assets/apiNguoiDung/apiNguoiDung";

//action danh sách người dùng chưa đăng kí (success)
const actDanhSachNGuoiDungChuaDKS = (data) => ({
  type: DANH_SACH_NGUOI_DUNG_CHUA_DK_S,
  payload: data,
});
// action danh sách người dùng chưa đăng kí
export const actDanhSachNguoiDungChuaDK = (maKkhoaHoc, accessToken) => {
  return (dispatch) => {
    apiNguoiDung
      .unregisteredListUser(maKkhoaHoc, accessToken)
      .then((res) => {
        dispatch(actDanhSachNGuoiDungChuaDKS(res.data));
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
};

