import quanLyNguoiDungApi from "apis/QuanLyNguoiDung";
import { actGetAllUser } from "../module/action";

export const actXoaNguoiDung = (taiKhoan, accessToken) => {
  return (dispatch) => {
    quanLyNguoiDungApi
      .xoaNguoiDung(taiKhoan, accessToken)
      .then((res) => {
        alert("Xóa thành công");
        dispatch(actGetAllUser());
      })
      .catch((err) => {
          alert(err.response?.data)
        console.log(err.response);
      });
  };
};
