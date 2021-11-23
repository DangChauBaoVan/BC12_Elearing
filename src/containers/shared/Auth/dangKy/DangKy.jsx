import React from "react";
import "./dangKy.scss";
import { useDispatch } from "react-redux";
import { actRegister } from "./module/action";

// sử lý form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

//Font awesome
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const handleOnClickRes = (e) => {
  let formRegister = document.querySelector(".register-form-container");
  formRegister.classList.remove("active");
  document.getElementById("clear_form").reset();
};

const schema = yup.object().shape({
  taiKhoan: yup
    .string()
    .required("Vui lòng nhập tài khoản")
    .min(4, "tài khoản nhỏ nhất 4 ký tự")
    .max(15, "tài khoản tối đa 15 ký tự"),
  matKhau: yup
    .string()
    .required("Vui lòng nhập mật khẩu")
    .min(8, "mật khẩu nhỏ nhất 8 ký tự")
    .max(20, "mật khẩu tối đa 20 ký tự")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Password can only contain Latin letters."
    ),
  xacNhanMatKhau: yup
    .string()
    .oneOf([yup.ref("matKhau"), null], "mật khẩu xác nhận không khớp"),
  hoTen: yup
    .string()
    .required("Vui lòng nhập họ tên")
    .matches(
      /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+/,
      "không đúng định dạng"
    )
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

export default function DangKy() {
  const dispatch = useDispatch();

  //see password
  const [passwordShown, setPasswordShown] = useState(false);
  const seePass = () => {
    setPasswordShown(!passwordShown);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submitForm = (data, e) => {
    dispatch(
      actRegister(
        {
          email: data.email,
          hoTen: data.hoTen,
          matKhau: data.matKhau,
          soDT: data.soDT,
          taiKhoan: data.taiKhoan,
          maNhom: "GP01",
        },
        e
      )
    );
  };

  return (
    <div className="register-form-container">
      <div id="close-register-btn" onClick={handleOnClickRes}>
        <Icon icon={faTimes} />
      </div>
      <form id="clear_form" onSubmit={handleSubmit(submitForm)}>
        <h3>đăng ký</h3>
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
        <p>Xác nhận lại Mật khẩu</p>
        <input
          type={passwordShown ? "text" : "password"}
          style={{ padding: "1rem 4rem 1.2rem 1rem" }}
          className={`box ${errors.matKhau?.message && "border__red"}`}
          placeholder="nhập mật khẩu"
          {...register("xacNhanMatKhau")}
        />
        <div className="text__err">
          <p className="text-danger" style={{ textTransform: "none" }}>
            {errors.xacNhanMatKhau?.message}
          </p>
        </div>
        <button type="submit" className="btn">
          Đăng Ký
        </button>
      </form>
    </div>
  );
}
