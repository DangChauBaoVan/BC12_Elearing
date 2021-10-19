import React from "react";
import { Link } from "react-router-dom";
import './themNguoiDung.scss'


export default function ThemNguoiDung() {
  return (
    <div className="text-left">
      <h3>THÊM NGƯỜI DÙNG</h3>
      <form className="row">
        <div className="col-6">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Tài khoản</label>
            <input
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Mật khẩu</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Họ tên</label>
            <input
              type="text"
              className="form-control"
            />
          </div>
        </div>
        <div className="col-6">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Số điện thoại</label>
            <input
              type="number"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label for="exampleFormControlSelect1">Example select</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>GIÁO VỤ</option>
              <option>HỌC VIÊN</option>
            </select>
          </div>
        </div>
        <Link to="/admin/quanlynguoidung" className='themNguoiDungLinkHome'> {'<<'} Trở lại </Link>
        <button type="submit" className="btn btn-primary themNguoiDungBtnHome">
          Thêm
        </button>
      </form>
    </div>
  );
}
