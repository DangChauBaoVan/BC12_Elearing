import quanLyNguoiDungApi from "apis/QuanLyNguoiDung";

export const actThemNguoiDung = (form, accessToken, history) => {
  return (dispatch) => {
    quanLyNguoiDungApi
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
