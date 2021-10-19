import React from "react";
import { Link } from "react-router-dom";
import "./themNguoiDung.scss";

export default function ThemNguoiDung() {
  return (
    <div className="text-left">
      <h1>THÊM NGƯỜI DÙNG</h1>
      <form className="row">
        <div className="col-6">
          <div className="form-group">
            <h3>Tài khoản</h3>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <h3>Mật khẩu</h3>
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group">
            <h3 htmlFor="exampleInputPassword1">Họ tên</h3>
            <input type="text" className="form-control" />
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
            />
          </div>
          <div className="form-group">
            <h3 htmlFor="exampleInputPassword1">Số điện thoại</h3>
            <input type="number" className="form-control" />
          </div>
          <div className="form-group">
            <h3 for="exampleFormControlSelect1">Example select</h3>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>GIÁO VỤ</option>
              <option>HỌC VIÊN</option>
            </select>
          </div>
        </div>
        <Link to="/admin/quanlynguoidung" className="themNguoiDungLinkHome">
          {"<<"} Trở lại
        </Link>
        <button type="submit" className="btn btn-primary themNguoiDungBtn">
          Thêm
        </button>
      </form>
    </div>
  );
}
