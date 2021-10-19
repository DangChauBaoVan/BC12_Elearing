import React from "react";
import { Link } from "react-router-dom";

export default function ThemKhoaHoc() {
  return (
    <div className="text-left">
      <h3>THÊM KHÓA HỌC</h3>
      <form className="row">
        <div className="col-6">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Mã khóa học</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Tên khóa học</label>
            <input type="password" className="form-control" />
          </div>
          <div className="form-group">
            <label for="exampleFormControlSelect1">Danh mục khóa học</label>
            <select class="form-control">
              <option>Lập trình FontEnd</option>
              <option>Lập trình BackEnd</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Ngày tạo khóa học</label>
            <input type="date" className="form-control" />
          </div>
        </div>
        <div className="col-6">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Đánh giá</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Lượt xem</label>
            <input type="number" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Người tạo</label>
            <input type="text" className="form-control" />
          </div>
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Hình ảnh</label>
                <input type="file" className="form-control" />
              </div>
            </div>
            <div className="col-6">
              <img src="" alt="..." style={{ width: "100px" }} />
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">
              Mô tả
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows={3}
              defaultValue={""}
            />
          </div>
        </div>
        <Link to="/admin/quanlyKhoaHoc" className="themNguoiDungLinkHome">
          {"<<"} Trở lại
        </Link>
        <button type="submit" className="btn btn-primary themNguoiDungBtnHome">
          Thêm
        </button>
      </form>
    </div>
  );
}
