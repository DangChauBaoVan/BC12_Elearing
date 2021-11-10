import quanLyNguoiDungApi from "apis/QuanLyNguoiDung";
import DangKy from "../DangKy";

export const actRegister = (form) => {
  return (dispatch) => {
    quanLyNguoiDungApi
      .dangKy(form)
      .then((respone) => {
        alert("đăng ký thành cộng");
        let formRegister = document.querySelector(".register-form-container");
        formRegister.classList.remove("active");
        <DangKy />;
      })
      .catch((err) => {
        alert(err.response?.data);
        console.log(err.response);
      });
  };
};
