import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import moment from "moment";
import { actCapNhatKhoaHoc } from "./module/action";
import { actMaDanhMuc } from "../themKhoaHoc/module/action";

export default function CapNhatKhoaHoc(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actMaDanhMuc());
  }, []);

  //danh sách mã danh mục để chọn
  const maDanhMucKhoaHoc = useSelector(
    (state) => state.maDanhMucReducer.maDanhMucKhoaHoc
  );

  const history = useHistory();

  const {
    maKhoaHoc,
    tenKhoaHoc,
    moTa,
    hinhAnh,
    ngayTao,
    danhMucKhoaHoc,
    nguoiTao,
  } = props.location.state.edu;

  const [form, setForm] = useState({
    maKhoaHoc,
    tenKhoaHoc,
    moTa,
    hinhAnh: null,
    maNhom: "GP11",
    ngayTao,
    maDanhMucKhoaHoc: danhMucKhoaHoc.maDanhMucKhoahoc,
    taiKhoanNguoiTao: nguoiTao.taiKhoan,
  });

  // hình hiển thị
  const [img, setimg] = useState(hinhAnh);

  const handleForm = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // custom ngay tao
  const handleDate = (e) => {
    const date = e.target.value;

    setForm((prevState) => ({
      ...prevState,
      ngayTao: moment(date).format("DD/MM/YYYY"),
    }));
  };

  //custom image
  const handleImage = (e) => {
    const img = e.target.files[0];
    //set hinhAnh vào form
    setForm((prevState) => ({
      ...prevState,
      hinhAnh: img,
    }));

    //show ảnh khi được chọn
    if (!img) return;

    let render = new FileReader();
    render.readAsDataURL(e.target.files[0]);
    setimg(render.result);
    render.onload = function (e) {
      setimg(e.target.result);
    };
    setimg(e.target);
  };

  //custom maDanhMucKhoaHoc
  const handleSel = (e) => {
    let value = e.target.value;
    setForm((prevState) => ({
      ...prevState,
      maDanhMucKhoaHoc: value,
    }));
  };

  //post form
  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();

    for (let key in form) {
      console.log(key, form[key]);
      formData.append(key, form[key]);
    }

    dispatch(actCapNhatKhoaHoc(formData, history));
  };

  return (
    <div className="text-left">
      <h1>CẬP NHẬT KHÓA HỌC</h1>
      <form className="row" onSubmit={handleSubmit}>
        <div className="col-6">
          <div className="form-group">
            <h3>Mã khóa học</h3>
            <input
              type="text"
              placeholder="Ex: java, c++, KH01, ..."
              className="form-control"
              onChange={handleForm}
              name="maKhoaHoc"
              value={form.maKhoaHoc}
            />
          </div>
          <div className="form-group">
            <h3 htmlFor="exampleInputEmail1">Tên khóa học</h3>
            <input
              type="text"
              className="form-control"
              placeholder="Ex: Beginning C Programming - From Beginner To Beyond"
              onChange={handleForm}
              name="tenKhoaHoc"
              value={form.tenKhoaHoc}
            />
          </div>
          <div className="form-group">
            <h3 for="exampleFormControlSelect1">Danh mục khóa học</h3>
            <select
              class="form-control"
              onChange={handleSel}
              value={form.maDanhMucKhoaHoc}
            >
              <option disabled selected>
                --select--
              </option>
              {maDanhMucKhoaHoc.map((danhMuc) => {
                const { maDanhMuc, tenDanhMuc } = danhMuc;
                return <option value={maDanhMuc}>{tenDanhMuc}</option>;
              })}
            </select>
          </div>
          <div className="form-group">
            <h3>Ngày tạo khóa học</h3>
            <input type="date" className="form-control" onChange={handleDate} />
          </div>
        </div>
        <div className="col-6">
          <div className="form-group">
            <h3>Người tạo</h3>
            <input
              type="text"
              disabled
              className="form-control"
              value={nguoiTao.taiKhoan}
            />
          </div>
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <h3 htmlFor="exampleInputPassword1">Hình ảnh</h3>
                <input
                  type="file"
                  className="form-control"
                  accept="image/.jpeg, image/.jpg,"
                  name="hinhAnh"
                  onChange={handleImage}
                />
              </div>
            </div>
            <div className="col-6">
              <img src={img} alt="..." style={{ width: "100px" }} />
            </div>
          </div>
          <div className="form-group">
            <h3 htmlFor="exampleFormControlTextarea1">Mô tả</h3>
            <textarea
              style={{ height: "111.3px" }}
              className="form-control"
              id="exampleFormControlTextarea1"
              rows={3}
              value={form.moTa}
              onChange={handleForm}
              name="moTa"
            />
          </div>
        </div>
        <div className="col-12"></div>
        <Link to="/admin/quanlyKhoaHoc" className="themNguoiDungLinkHome">
          {"<<"} Trở lại
        </Link>
        <button type="submit" className="btn btn-primary themNguoiDungBtn">
          Cập Nhật
        </button>
      </form>
    </div>
  );
}
