import quanLyNguoiDungApi from "apis/QuanLyNguoiDung";
import CapNhat from "../CapNhat";

export const actUpdateUser = (form, accessToken, e) => {
  return (dispatch) => {
    quanLyNguoiDungApi
      .capNhatNguoiDung(form, accessToken)
      .then((respone) => {
        let formUpdate = document.querySelector(".update-form-container");
        formUpdate.classList.remove("active");
        e.target.reset();
        <CapNhat />;
        alert("cập nhật thành cộng");
      })
      .catch((err) => {
        alert(err.response?.data);
      });
  };
};
