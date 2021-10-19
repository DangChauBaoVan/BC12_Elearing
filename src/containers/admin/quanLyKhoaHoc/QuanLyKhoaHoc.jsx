import React from "react";
import { useHistory } from "react-router";
import ListEdu from "./danhSachKhoaHoc/ListEdu";
import TimKhoaHoc from "./timKhoaHoc/TimKhoaHoc";

export default function QuanLyKhoaHoc() {
  const history = useHistory();
  return (
    <div className="quanLyNguoiDung">
      <span className="quanLyNguoiDungTitle">QUẢN LÝ KHÓA HỌC</span>
      <button
        onClick={() => history.push("/admin/quanlykhoahoc/themKhoaHoc")}
        type="button"
        className="btn themNguoiDung"
      >
        Thêm Khóa Học
      </button>
      <ListEdu />
    </div>
  );
}
