import { apiNguoiDung } from "apis/apiNguoiDung/apiNguoiDung";

export const actThemNguoiDung = (form, accessToken, history) => {
  return (dispatch) => {
    apiNguoiDung
      .themNguoiDung(form, accessToken)
      .then((res) => {
        alert("Thêm người dùng thành công");
        history.push('/admin/quanlynguoidung')
      })
      .catch((err) => {
        console.log(err.response?.data);
      });
  };
};
