import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { actCapNhatNguoiDung, actLayThongTin } from "./module/action";

// sử lý form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// tạo một validation schema với yup
const schema = yup.object().shape({
  matKhau: yup
    .string()
    .required("Vui lòng nhập mật khẩu")
    .min(8, "mật khẩu nhỏ nhất 8 ký tự")
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
  soDT: yup.string().required("Vui lòng nhập số điện thoại"),
});

export default function CapNhatNguoiDung(props) {
  const accessToken = useSelector(
    (state) => state.loginReducer.currentUser.accessToken
  );
  const dispatch = useDispatch();
  const history = useHistory();

  const { email, hoTen, maLoaiNguoiDung, matKhau, soDt, soDT, taiKhoan } =
    props.location.state.user;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const soDtt = () => {
    if (soDt) {
      return soDt;
    }
    return soDT;
  };

  //form
  const onchangeForm = (e) => {
    dispatch(
      actCapNhatNguoiDung({ ...e, maNhom: "GP01", taiKhoan: taiKhoan }, accessToken, history)
    );
  };

  return (
    <div className="text-left">
      <h1>CẬP NHẬT NGƯỜI DÙNG</h1>
      <form className="row" onSubmit={handleSubmit(onchangeForm)}>
        <div className="col-6">
          <div className="form-group">
            <h3>Tài khoản</h3>
            <input
              disabled
              type="text"
              className="form-control"
              defaultValue={taiKhoan}
            />
          </div>
          <div className="form-group">
            <h3>Mật khẩu</h3>
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              {...register("matKhau")}
              defaultValue={matKhau}
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
              defaultValue={hoTen}
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
              className="form-control"
              autoComplete="email"
              {...register("email")}
              defaultValue={email}
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
              {...register("soDT")}
              defaultValue={soDtt()}
            />
            {errors.soDt && (
              <p className="text-danger" style={{ textTransform: "none" }}>
                {errors.soDt?.message}
              </p>
            )}
          </div>
          <div className="form-group">
            <h3 for="exampleFormControlSelect1">Mã người dùng</h3>
            <select
              class="form-control"
              id="exampleFormControlSelect1"
              // onChange={changeSel}
              {...register("maLoaiNguoiDung")}
              defaultValue={maLoaiNguoiDung}
            >
              <option value="GV">GIÁO VỤ</option>
              <option value="HV">HỌC VIÊN</option>
            </select>
          </div>
        </div>
        <Link to="/admin/quanlynguoidung" className="themNguoiDungLinkHome">
          {"<<"} Trở lại
        </Link>
        <button type="submit" className="btn btn-primary themNguoiDungBtn">
          Update
        </button>
      </form>
    </div>
  );
}
