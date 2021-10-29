import { apiNguoiDung } from "assets/apiNguoiDung/apiNguoiDung";
import { DANH_SACH_NGUOI_DUNG_DA_GHI_DANH } from "./type";

//action danh sách người dùng chờ xét duyệt (success)
const actDanhSachNguoiDungChoGhiDanhSuccess = (data) => ({
  type: DANH_SACH_NGUOI_DUNG_DA_GHI_DANH,
  payload: data,
});
// action danh sách người dùng chờ xét duyệt
export const actDanhSachNguoiDungChoGhiDanh = (maKkhoaHoc, accessToken) => {
  return (dispatch) => {
    apiNguoiDung
      .danhSachNguoiDungChoXetDuyet(maKkhoaHoc, accessToken)
      .then((res) => {
        // console.log('da ghi danh', res.data)
        dispatch(actDanhSachNguoiDungChoGhiDanhSuccess(res.data));
      })
      .catch((err) => {
        console.log("đa ghi danh", err.response);
      });
  };
};
