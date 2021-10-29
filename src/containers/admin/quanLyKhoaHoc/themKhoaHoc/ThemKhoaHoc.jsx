import React from "react";
import { Link } from "react-router-dom";

export default function ThemKhoaHoc() {




  return (
    <div className="text-left">
      <h1>THÊM KHÓA HỌC</h1>
      <form className="row">
        <div className="col-6">
          <div className="form-group">
            <h3>Mã khóa học</h3>
            <input type="text" className="form-control" name=""/>
          </div>
          <div className="form-group">
            <h3>Tên khóa học</h3>
            <input type="password" className="form-control" />
          </div>
          <div className="form-group">
            <h3 for="exampleFormControlSelect1">Danh mục khóa học</h3>
            <select class="form-control">
              <option>Lập trình FontEnd</option>
              <option>Lập trình BackEnd</option>
            </select>
          </div>
          <div className="form-group">
            <h3>Ngày tạo khóa học</h3>
            <input type="date" className="form-control" />
          </div>
        </div>
        <div className="col-6">
          <div className="form-group">
            <h3>Đánh giá</h3>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group">
            <h3 htmlFor="exampleInputPassword1">Lượt xem</h3>
            <input type="number" className="form-control" />
          </div>
          <div className="form-group">
            <h3 htmlFor="exampleInputPassword1">Người tạo</h3>
            <input type="text" className="form-control" />
          </div>
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <h3 htmlFor="exampleInputPassword1">Hình ảnh</h3>
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
            <h3 htmlFor="exampleFormControlTextarea1">
              Mô tả
            </h3>
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
        <button type="submit" className="btn btn-primary themNguoiDungBtn">
          Thêm
        </button>
      </form>
    </div>
  );
}
