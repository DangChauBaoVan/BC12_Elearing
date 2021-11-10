import React from "react";
import "./capNhat.scss";
import { useDispatch } from "react-redux";
import { actUpdateUser } from "./module/action";
import { accessToken } from "settings/apiConfig";
// sử lý form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

//Font awesome
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const handleOnClickClose = (e) => {
  let formUpdate = document.querySelector(".update-form-container");
  formUpdate.classList.remove("active");
  document.getElementById("clear_form").reset();
};
const schema = yup.object().shape({
  taiKhoan: yup
    .string()
    .required("Vui lòng nhập tài khoản")
    .min(4, "tài khoản nhỏ nhất 4 ký tự")
    .max(10, "tài khoản tối đa 10 ký tự"),
  matKhau: yup
    .string()
    .required("Vui lòng nhập mật khẩu")
    .min(8, "mật khẩu nhỏ nhất 6 ký tự")
    .max(20, "mật khẩu tối đa 20 ký tự")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Password can only contain Latin letters."
    ),
  hoTen: yup
    .string()
    .required("Vui lòng nhập họ tên")
    .min(5, "mật khẩu nhỏ nhất 5 ký tự"),
  email: yup
    .string()
    .required("Vui lòng nhập email")
    .email("định dạng email không đúng")
    .matches(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "định dạng email không đúng"
    ),
  soDT: yup
    .string()
    .required("Vui lòng nhập số điện thoại")
    .matches(/^0[0-9\-\+]/, "định dạng không đúng")
    .min(9, "Số điện thoại nhỏ nhất 9 số")
    .max(15, "Số điện thoại lớp nhất 15 số"),
});

export default function CapNhat() {
  const dispatch = useDispatch();

  //see password
  const [passwordShown, setPasswordShown] = useState(false);
  const seePass = () => {
    setPasswordShown(!passwordShown);
  };

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submitForm = (data, e) => {
    dispatch(actUpdateUser({ ...data, maNhom: "GP01", maLoaiNguoiDung: "HV" }, accessToken, e));
  };

  return (
    <div className="update-form-container">
      <div id="close-update-btn" onClick={handleOnClickClose}>
        <Icon icon={faTimes} />
      </div>
      <form id="clear_form" onSubmit={handleSubmit(submitForm)}>
        <h3>Cập nhật thông tin</h3>
        <div className="row">
          <div className="col-6">
            <p>Họ tên</p>
            <input
              type="text"
              name="hoTen"
              className={`box ${errors.hoTen?.message && "border__red"}`}
              placeholder="nhập họ tên"
              {...register("hoTen")}
            />
            <div className="text__err">
              <p className="text-danger" style={{ textTransform: "none" }}>
                {errors.hoTen?.message}
              </p>
            </div>
            <p>Tài khoản</p>
            <input
              type="text"
              name="taiKhoan"
              className={`box ${errors.taiKhoan?.message && "border__red"}`}
              placeholder="nhập tài khoản"
              {...register("taiKhoan")}
            />
            <div className="text__err">
              <p className="text-danger" style={{ textTransform: "none" }}>
                {errors.taiKhoan?.message}
              </p>
            </div>
          </div>
          <div className="col-6">
            <p>Số điện thoại</p>
            <input
              type="tel"
              name="soDT"
              className={`box ${errors.soDT?.message && "border__red"}`}
              placeholder="nhập số điện thoại"
              {...register("soDT")}
            />
            <div className="text__err">
              <p className="text-danger" style={{ textTransform: "none" }}>
                {errors.soDT?.message}
              </p>
            </div>
            <p>Email</p>
            <input
              type="email"
              name="email"
              className={`box ${errors.email?.message && "border__red"}`}
              placeholder="nhập email"
              {...register("email")}
            />
            <div className="text__err">
              <p className="text-danger" style={{ textTransform: "none" }}>
                {errors.email?.message}
              </p>
            </div>
          </div>
        </div>
        <p>Mật khẩu</p>
        <input
          type={passwordShown ? "text" : "password"}
          style={{ padding: "1rem 4rem 1.2rem 1rem" }}
          className={`box ${errors.matKhau?.message && "border__red"}`}
          placeholder="nhập mật khẩu"
          {...register("matKhau")}
        />
        <div className="main__icon_eye">
          <Icon
            icon={passwordShown ? faEye : faEyeSlash}
            className="icon__eye"
            onClick={seePass}
          />
        </div>
        <div className="text__err">
          <p className="text-danger" style={{ textTransform: "none" }}>
            {errors.matKhau?.message}
          </p>
        </div>
        <button type="submit" className="btn">
          Cập nhật
        </button>
      </form>
    </div>
  );
}
