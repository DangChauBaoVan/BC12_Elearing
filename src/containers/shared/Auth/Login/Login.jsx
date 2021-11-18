import React from "react";
import "./Login.scss";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useFormik, Formik } from "formik";
import { useDispatch } from "react-redux";
import { actLogin } from "./module/action";
import DangKy from "containers/shared/Auth/dangKy/DangKy";
import CapNhat from "../capNhatThongTin/CapNhat";
const handleOnClick = () => {
  let loginForm = document.querySelector(".login-form-container");
  loginForm.classList.remove("active");
};

export default function Login() {
  const dispatch = useDispatch();

  const handleOnClickRes = () => {
    let loginForm = document.querySelector(".register-form-container");
    loginForm.classList.toggle("active");
  };

  const handleOnClickUpdate = () => {
    let loginForm = document.querySelector(".update-form-container");
    loginForm.classList.toggle("active");
  };

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    onSubmit: (values) => {
      console.log("values: ", values);
      formik.resetForm();
      dispatch(actLogin(values));
      handleOnClick();
    },
  });
  return (
    <div className="login-form-container">
      <div
        id="close-login-btn"
        className="fas fa-times"
        onClick={handleOnClick}
      >
        <Icon icon={faTimes} />
      </div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          formik.handleSubmit(event);
        }}
      >
        <h3>đăng nhập</h3>
        <span>username</span>
        <input
          type="text"
          name="taiKhoan"
          onChange={formik.handleChange}
          value={formik.values.taiKhoan}
          className="box"
          placeholder="enter your email"
          id
        />
        <span>password</span>
        <input
          type="password"
          name="matKhau"
          onChange={formik.handleChange}
          value={formik.values.matKhau}
          className="box"
          placeholder="enter your password"
          id
        />

        <button type="submit" className="btn">
          Đăng Nhập
        </button>
        <p>
          <a onClick={handleOnClickUpdate} href="#">
            quên mật khẩu
          </a>
        </p>
        <p>
          <a onClick={handleOnClickRes} href="#">
            tạo tài khoản
          </a>
        </p>
      </form>
      <DangKy />
      <CapNhat />
    </div>
  );
}
