import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { actThemNguoiDung } from "./action";
import "./themNguoiDung.scss";

export default function ThemNguoiDung() {
  const accessToken = useSelector(
    (state) => state.loginReducer.currentUser.accessToken
  );
  const dispatch = useDispatch();
  const history = useHistory();
  const [form, setform] = useState();

  const onChangeForm = (e) => {
    const { name, value } = e.target;

    setform((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  //set value từ selector
  const onChangeSel = (e) => {
    setform({ ...form, maLoaiNguoiDung: e.target.value, maNhom: "GP11" });
  };

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(actThemNguoiDung(form, accessToken, history));
  };

  return (
    <div className="text-left">
      <h1>THÊM NGƯỜI DÙNG</h1>
      <form className="row">
        <div className="col-6">
          <div className="form-group">
            <h3>Tài khoản</h3>
            <input
              type="text"
              className="form-control"
              name="taiKhoan"
              onChange={onChangeForm}
            />
          </div>
          <div className="form-group">
            <h3>Mật khẩu</h3>
            <input
              minLength={5}
              type="text"
              className="form-control"
              id="inputPassword"
              name="matKhau"
              onChange={onChangeForm}
            />
          </div>
          <div className="form-group">
            <h3>Họ tên</h3>
            <input
              type="text"
              className="form-control"
              name="hoTen"
              onChange={onChangeForm}
            />
          </div>
        </div>
        <div className="col-6">
          <div className="form-group">
            <h3>Email</h3>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail"
              aria-describedby="emailHelp"
              name="email"
              onChange={onChangeForm}
            />
          </div>
          <div className="form-group">
            <h3>Số điện thoại</h3>
            <input
              type="number"
              className="form-control"
              name="soDt"
              onChange={onChangeForm}
            />
          </div>
          <div className="form-group">
            <h3>Loại người dùng</h3>
            <select class="form-control" onChange={onChangeSel}>
              <option value="GV">GIÁO VỤ</option>
              <option value="HV">HỌC VIÊN</option>
            </select>
          </div>
        </div>
        <Link to="/admin/quanlynguoidung" className="themNguoiDungLinkHome">
          {"<<"} Trở lại
        </Link>
        <button
          onClick={submitForm}
          type="submit"
          className="btn btn-primary themNguoiDungBtn"
        >
          Thêm
        </button>
      </form>
    </div>
  );
}
