import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import moment from "moment";
import { actMaDanhMuc, actThemKhoaHoc } from "./module/action";

// sử lý form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// tạo một validation schema với yup
const schema = yup.object().shape({
  maKhoaHoc: yup
    .string()
    .required("vui lòng nhập mã nhóm")
    .min(2, "mã nhóm nhỏ nhất 2 ký tự")
    .max(8, "mã nhóm tối đa 8 ký tự"),
  tenKhoaHoc: yup
    .string()
    .required("vui lòng nhập tên khóa học")
    .min(3, "tên khóa học nhỏ nhất 3 ký tự")
    .max(25, "tên khóa học tối đa 25 ký tự"),
  ngayTao: yup.string().required("vui lòng chọn ngày tạo"),
  maDanhMucKhoaHoc: yup.string().required("vui lòng chọn danh mục khóa học"),
  hinhAnh: yup
    .mixed()
    .required()
    .test("file", "vui lòng chọn hình", (value) => {
      return value.length !== 0;
    }),
  moTa: yup
    .string()
    .required("Vui lòng nhập mô tả")
    .min(10, "mô tả ít nhất 10 ký tự")
});

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

  //custom hình hiển thị
  const [img, setimg] = useState({});

  //custom image
  const handleImage = (e) => {
    const img = e.target.files[0];

    //show ảnh khi được chọn
    // if (img) return;

    let render = new FileReader();
    render.readAsDataURL(e.target.files[0]);
    setimg(render.result);
    render.onload = function (e) {
      setimg(e.target.result);
    };
    setimg(e.target);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submitForm = (e) => {
    const form = {
      ...e,
      taiKhoanNguoiTao: taiKhoan,
      hinhAnh: e.hinhAnh[0],
      maNhom: "GP01",
      ngayTao: moment(e.ngayTao).format("DD/MM/YYYY"),
    };

    const newForm = new FormData();
    for (let key in form) {
      console.log(key, form[key]);
      newForm.append(key, form[key]);
    }
    dispatch(actThemKhoaHoc(newForm, history));
  };

  return (
    <div className="text-left">
      <h1>THÊM KHÓA HỌC</h1>
      <form className="row" onSubmit={handleSubmit(submitForm)}>
        <div className="col-6">
          <div className="form-group">
            <h3>Mã khóa học</h3>
            <input
              type="text"
              className="form-control"
              {...register("maKhoaHoc")}
            />
            <p className="text-danger" style={{ textTransform: "none" }}>
              {errors.maKhoaHoc?.message}
            </p>
          </div>
          <div className="form-group">
            <h3>Tên khóa học</h3>
            <input
              type="text"
              className="form-control"
              {...register("tenKhoaHoc")}
            />
            <p className="text-danger" style={{ textTransform: "none" }}>
              {errors.tenKhoaHoc?.message}
            </p>
          </div>
          <div className="form-group">
            <h3>Danh mục khóa học</h3>
            <select class="form-control" {...register("maDanhMucKhoaHoc")}>
              <option disabled selected value="">
                --select--
              </option>
              {maDanhMucKhoaHoc.map((danhMuc) => {
                const { maDanhMuc, tenDanhMuc } = danhMuc;
                return <option value={maDanhMuc}>{tenDanhMuc}</option>;
              })}
            </select>
            <p className="text-danger" style={{ textTransform: "none" }}>
              {errors.maDanhMucKhoaHoc?.message}
            </p>
          </div>
          <div className="form-group">
            <h3>Ngày tạo khóa học</h3>
            <input
              type="date"
              className="form-control"
              {...register("ngayTao")}
            />
            <p className="text-danger" style={{ textTransform: "none" }}>
              {errors.ngayTao?.message}
            </p>
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
                  onChangeCapture={handleImage}
                  {...register("hinhAnh")}
                />
                <p className="text-danger" style={{ textTransform: "none" }}>
                  {errors.hinhAnh?.message}
                </p>
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
              style={{ height: "112px", textTransform: "none" }}
              className="form-control"
              {...register("moTa")}
            />
            <p className="text-danger" style={{ textTransform: "none" }}>
              {errors.moTa?.message}
            </p>
          </div>
        </div>
        <div className="row_new">
          <div>
            <Link to="/admin/quanlyKhoaHoc" className="themLinkHome">
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
