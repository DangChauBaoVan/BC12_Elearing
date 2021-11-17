import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

import { actThemNguoiDung } from "./action";
import "./themNguoiDung.scss";

// sử lý form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// tạo một validation schema với yup
const schema = yup.object().shape({
  taiKhoan: yup
    .string()
    .required("Vui lòng nhập tài khoản")
    .min(5, "tài khoản nhỏ nhất 5 ký tự")
    .max(15, "tài khoản tối đa 15 ký tự"),
  matKhau: yup
    .string()
    .required("Vui lòng nhập mật khẩu")
    .min(6, "mật khẩu nhỏ nhất 6 ký tự")
    .max(20, "mật khẩu tối đa 20 ký tự"),
  hoTen: yup
    .string()
    .required("Vui lòng nhập họ tên")
    .min(5, "mật khẩu nhỏ nhất 6 ký tự")
    .max(100, "mật khẩu tối đa 100 ký tự"),
  email: yup
    .string()
    .required("Vui lòng nhập email")
    .email("định dạng email không đúng"),
  soDt: yup.string().required("Vui lòng nhập số điện thoại"),
});

export default function ThemNguoiDung() {
  const accessToken = useSelector(
    (state) => state.loginReducer.currentUser.accessToken
  );
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submitForm = (e) => {
    dispatch(actThemNguoiDung({ ...e, maNhom: "GP01" }, accessToken, history));
  };
  // onError={(e)=>{e.target.onerror = null; e.target.src="https://picsum.photos/200/300"}}
  return (
    <div className="text-left">
      <h1>THÊM NGƯỜI DÙNG</h1>
      <form className="row" onSubmit={handleSubmit(submitForm)}>
        <div className="col-6">
          <div className="form-group">
            <h3>Tài khoản</h3>
            <input
              type="text"
              className="form-control"
              {...register("taiKhoan")}
            />
            {errors.taiKhoan && (
              <p className="text-danger" style={{ textTransform: "none" }}>
                {errors.taiKhoan?.message}
              </p>
            )}
          </div>
          <div className="form-group">
            <h3>Mật khẩu</h3>
            <input
              minLength={5}
              type="text"
              className="form-control"
              {...register("matKhau")}
            />
            {errors.matKhau && (
              <p className="text-danger" style={{ textTransform: "none" }}>
                {errors.matKhau?.message}
              </p>
            )}
          </div>
          <div className="form-group">
            <h3>Họ tên</h3>
            <input
              type="text"
              className="form-control"
              {...register("hoTen")}
            />
            {errors.hoTen && (
              <p className="text-danger" style={{ textTransform: "none" }}>
                {errors.hoTen?.message}
              </p>
            )}
          </div>
        </div>
        <div className="col-6">
          <div className="form-group">
            <h3>Email</h3>
            <input
              type="email"
              class="form-control"
              aria-describedby="emailHelp"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-danger" style={{ textTransform: "none" }}>
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-group">
            <h3>Số điện thoại</h3>
            <input
              type="number"
              className="form-control"
              {...register("soDt")}
            />
            {errors.soDt && (
              <p className="text-danger" style={{ textTransform: "none" }}>
                {errors.soDt?.message}
              </p>
            )}
          </div>
          <div className="form-group">
            <h3>Loại người dùng</h3>
            <select class="form-control" {...register("maLoaiNguoiDung")}>
              <option selected value="HV">
                HỌC VIÊN
              </option>
              <option value="GV">GIÁO VỤ</option>
            </select>
          </div>
        </div>
        <div className="row_new">
          <div>
            <Link to="/admin/quanlynguoidung" className="themLinkHome">
              {"<<"} Trở lại
            </Link>
          </div>
          <div>
            <button type="submit" className="btn btn-primary">
              Thêm
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
