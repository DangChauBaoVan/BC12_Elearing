import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import moment from "moment";
import { actMaDanhMuc, actThemKhoaHoc } from "./module/action";

export default function ThemKhoaHoc() {
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actMaDanhMuc());
  }, []);
  //danh sách mã danh mục để chọn
  const maDanhMucKhoaHoc = useSelector(
    (state) => state.maDanhMucReducer.maDanhMucKhoaHoc
  );

  //tài khoản được tạo
  const taiKhoan = useSelector(
    (state) => state.loginReducer.currentUser.taiKhoan
  );

  //form khóa học mới
  const [form, setform] = useState();

  //set value mã khóa học
  const onChangeSel = (e) => {
    setform({
      ...form,
      maDanhMucKhoaHoc: e.target.value,
    });
  };

  //set value image
  //hình được hiển thị
  const [img, setimg] = useState("");

  const onChangeImage = (e) => {
    const file = e.target.files[0];
    setform({
      ...form,
      hinhAnh: file,
    });

    //tạo đối tượng đọc file
    if (!file) return;
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      setimg(e.target.result);
    };
  };

  //set ngày tạo
  const onChangeDate = (e) => {
    setform({
      ...form,
      ngayTao: moment(e.target.value).format("DD/MM/YYYY"),
    });
  };

  const onChangeForm = (e) => {
    const { name, value } = e.target;
    setform((form) => ({
      ...form,
      [name]: value,
      maNhom: "GP11",
      taiKhoanNguoiTao: taiKhoan,
    }));
  };

  const submitForm = (e) => {
    e.preventDefault();

    const newForm = new FormData();

    for (let key in form) {
      console.log(key, form[key])
      newForm.append(key, form[key]);
    }

    dispatch(actThemKhoaHoc(newForm, history));
  };

  return (
    <div className="text-left">
      <h1>THÊM KHÓA HỌC</h1>
      <form className="row" onSubmit={submitForm}>
        <div className="col-6">
          <div className="form-group">
            <h3>Mã khóa học</h3>
            <input
              type="text"
              className="form-control"
              name="maKhoaHoc"
              onChange={onChangeForm}
            />
          </div>
          <div className="form-group">
            <h3>Tên khóa học</h3>
            <input
              type="text"
              className="form-control"
              name="tenKhoaHoc"
              onChange={onChangeForm}
            />
          </div>
          <div className="form-group">
            <h3>Danh mục khóa học</h3>
            <select class="form-control" onChange={onChangeSel}>
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
            <input
              type="date"
              className="form-control"
              onChange={onChangeDate}
            />
          </div>
        </div>
        <div className="col-6">
          <div className="form-group">
            <h3 htmlFor="exampleInputPassword1">Người tạo</h3>
            <input
              type="text"
              className="form-control"
              value={taiKhoan}
              disabled
            />
          </div>
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <h3 htmlFor="exampleInputPassword1">Hình ảnh</h3>
                <input
                  type="file"
                  accept="image/.jpg, image/.jpeg"
                  className="form-control"
                  onChange={onChangeImage}
                />
              </div>
            </div>
            <div className="col-6">
              <img
                src={img}
                alt="..."
                style={{ width: "100px", height: "70px" }}
              />
            </div>
          </div>
          <div className="form-group">
            <h3 htmlFor="exampleFormControlTextarea1">Mô tả</h3>
            <textarea
              style={{ height: "112px" }}
              className="form-control"
              id="exampleFormControlTextarea1"
              rows={3}
              defaultValue={""}
              onChange={onChangeForm}
              name="moTa"
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
