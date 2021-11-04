import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { actCapNhatNguoiDung, actLayThongTin } from "./module/action";

export default function CapNhatNguoiDung(props) {
  const accessToken = useSelector(
    (state) => state.loginReducer.currentUser.accessToken
  );
  const dispatch = useDispatch();
  const history = useHistory();

  const { email, hoTen, maLoaiNguoiDung, matKhau, soDt, soDT, taiKhoan } =
    props.location.state.user;

  const soDtt = () => {
    if (soDt) {
      return soDt;
    }
    return soDT;
  };

  // FORM
  const [form, setForm] = useState({
    maNhom: "GP11",
    email,
    hoTen,
    maLoaiNguoiDung,
    matKhau,
    soDt: soDtt(),
    taiKhoan,
  });

  //add form
  const onChange = (e) => {
    const { name, value } = e.target;
    return setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // custom select
  const changeSel = (e) => {
    let value = e.target.value;
    console.log(e.target.value);
    setForm((prevState) => ({
      ...prevState,
      maLoaiNguoiDung: value,
    }));
  };

  //form
  const onchangeForm = (e) => {
    e.preventDefault();
    console.log(form);
    dispatch(actCapNhatNguoiDung(form, accessToken, history));
  };

  return (
    <div className="text-left">
      <h1>CẬP NHẬT NGƯỜI DÙNG</h1>
      <form className="row" onSubmit={onchangeForm}>
        <div className="col-6">
          <div className="form-group">
            <h3>Tài khoản</h3>
            <input
              type="text"
              className="form-control"
              name="taiKhoan"
              onChange={onChange}
              value={form.taiKhoan}
            />
          </div>
          <div className="form-group">
            <h3>Mật khẩu</h3>
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              name="matKhau"
              onChange={onChange}
              value={form.matKhau}
            />
          </div>
          <div className="form-group">
            <h3 htmlFor="exampleInputPassword1">Họ tên</h3>
            <input
              type="text"
              className="form-control"
              name="hoTen"
              value={form.hoTen}
              onChange={onChange}
            />
          </div>
        </div>
        <div className="col-6">
          <div className="form-group">
            <h3>Email</h3>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              onChange={onChange}
              value={form.email}
            />
          </div>
          <div className="form-group">
            <h3 htmlFor="exampleInputPassword1">Số điện thoại</h3>
            <input
              type="tel"
              className="form-control"
              name="soDt"
              onChange={onChange}
              value={form.soDt}
            />
          </div>
          <div className="form-group">
            <h3 for="exampleFormControlSelect1">Mã người dùng</h3>
            <select
              class="form-control"
              id="exampleFormControlSelect1"
              onChange={changeSel}
              value={form.maLoaiNguoiDung}
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
