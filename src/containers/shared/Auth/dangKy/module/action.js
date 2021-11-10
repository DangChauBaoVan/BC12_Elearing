import quanLyNguoiDungApi from "apis/QuanLyNguoiDung";
import DangKy from "../DangKy";

export const actRegister = (form, e) => {
  return (dispatch) => {
    quanLyNguoiDungApi
      .dangKy(form)
      .then((respone) => {
        let formRegister = document.querySelector(".register-form-container");
        formRegister.classList.remove("active");
        e.target.reset();
        <DangKy />;
        alert("đăng ký thành cộng");
      })
      .catch((err) => {
        alert(err.response?.data);
      });
  };
};
