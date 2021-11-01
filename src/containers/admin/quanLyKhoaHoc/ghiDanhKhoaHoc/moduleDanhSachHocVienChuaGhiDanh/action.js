import { apiNguoiDung } from "apis/apiNguoiDung/apiNguoiDung";
import { DANH_SACH_NGUOI_DUNG_CHUA_GHI_DANH } from "./type";


//action danh sách người dùng chưa ghi danh (success)
const actDanhSachNGuoiDungChuaGhiDanhSuccess = (data) => ({
  type: DANH_SACH_NGUOI_DUNG_CHUA_GHI_DANH,
  payload: data,
});
// action danh sách người dùng chưa đăng kí
const actDanhSachNguoiDungChuaGhiDanh = (maKkhoaHoc, accessToken) => {
  return (dispatch) => {
    apiNguoiDung
      .danhSachNguoiDungChuaGhiDanh(maKkhoaHoc, accessToken)
      .then((res) => {
        dispatch(actDanhSachNGuoiDungChuaGhiDanhSuccess(res.data));
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
};

export default actDanhSachNguoiDungChuaGhiDanh
