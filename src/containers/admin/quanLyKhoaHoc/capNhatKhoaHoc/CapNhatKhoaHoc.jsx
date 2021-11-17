import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import moment from "moment";
import { actCapNhatKhoaHoc } from "./module/action";
import { actMaDanhMuc } from "../themKhoaHoc/module/action";

// sử lý form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// tạo một validation schema với yup
const schema = yup.object().shape({
  tenKhoaHoc: yup
    .string()
    .required("Vui lòng nhập tên khóa học")
    .min(2, "tên khóa học nhỏ nhất 2 ký tự")
    .max(20, "tên khóa học tối đa 20 ký tự"),
  ngayTao: yup.string().required("Vui lòng chọn ngày tạo"),
  moTa: yup
    .string()
    .required("Vui lòng nhập mô tả")
    .min(10, "mô tả ít nhất 10 ký tự"),
});

export default function CapNhatKhoaHoc(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actMaDanhMuc());
  }, []);
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  //danh sách mã danh mục để chọn
  const maDanhMucKhoaHoc = useSelector(
    (state) => state.maDanhMucReducer.maDanhMucKhoaHoc
  );

  const {
    maKhoaHoc,
    tenKhoaHoc,
    moTa,
    hinhAnh,
    ngayTao,
    danhMucKhoaHoc,
    nguoiTao,
  } = props.location.state.edu;

  // // hình hiển thị
  const [img, setimg] = useState(hinhAnh);

  // custom image
  const handleImage = (e) => {
    const img = e.target.files[0];

    //show ảnh khi được chọn
    if (!img) return;

    let render = new FileReader();
    render.readAsDataURL(e.target.files[0]);
    render.onload = function (e) {
      setimg(e.target.result);
    };
  };

  //post form
  const submitForm = (e) => {
    const form = {
      ...e,
      maKhoaHoc: maKhoaHoc,
      taiKhoanNguoiTao: nguoiTao.taiKhoan,
      hinhAnh: e.hinhAnh[0],
      maNhom: "GP01",
      ngayTao: moment(e.ngayTao).format("DD/MM/YYYY"),
    };
    console.log(form);
    let formData = new FormData();
    for (let key in form) {
      formData.append(key, form[key]);
    }
    dispatch(actCapNhatKhoaHoc(formData, history));
  };

  return (
    <div className="text-left">
      <h1>CẬP NHẬT KHÓA HỌC</h1>
      <form className="row" onSubmit={handleSubmit(submitForm)}>
        <div className="col-6">
          <div className="form-group">
            <h3>Mã khóa học</h3>
            <input
              type="text"
              placeholder="Ex: java, c++, KH01, ..."
              className="form-control"
              value={maKhoaHoc}
              disabled
            />
          </div>
          <div className="form-group">
            <h3 htmlFor="exampleInputEmail1">Tên khóa học</h3>
            <input
              type="text"
              className="form-control"
              placeholder="Ex: Beginning C Programming - From Beginner To Beyond"
              defaultValue={tenKhoaHoc}
              {...register("tenKhoaHoc")}
            />
            <p className="text-danger" style={{ textTransform: "none" }}>
              {errors.tenKhoaHoc?.message}
            </p>
          </div>
          <div className="form-group">
            <h3 for="exampleFormControlSelect1">Danh mục khóa học</h3>
            <select
              class="form-control"
              defaultValue={danhMucKhoaHoc.maDanhMucKhoahoc}
              {...register("maDanhMucKhoaHoc")}
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
            <input
              type="date"
              className="form-control"
              defaultValue={moment(ngayTao).format("YYYY-MM-DD")}
              {...register("ngayTao")}
            />
            <p className="text-danger" style={{ textTransform: "none" }}>
              {errors.ngayTao?.message}
            </p>
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
                  onChangeCapture={handleImage}
                  {...register("hinhAnh")}
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
              style={{ height: "111.3px", textTransform: "none" }}
              className="form-control"
              defaultValue={moTa}
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
