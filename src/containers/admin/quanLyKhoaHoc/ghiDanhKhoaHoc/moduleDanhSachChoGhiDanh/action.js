import { apiNguoiDung } from "apis/apiNguoiDung/apiNguoiDung";
import { DANH_SACH_NGUOI_DUNG_CHO_XET_DUYET } from "./type";

//action danh sách người dùng chờ xét duyệt (success)
const actDanhSachNguoiDungChoXetDuyetSuccess = (data) => ({
  type: DANH_SACH_NGUOI_DUNG_CHO_XET_DUYET,
  payload: data,
});
// action danh sách người dùng chờ xét duyệt
export const actDanhSachNguoiDungChoXetDuyet = (maKkhoaHoc, accessToken) => {
  return (dispatch) => {
    apiNguoiDung
      .danhSachNguoiDungChoXetDuyet(maKkhoaHoc, accessToken)
      .then((res) => {
        // console.log('thành công', res.data)
        dispatch(actDanhSachNguoiDungChoXetDuyetSuccess(res.data))
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
};
