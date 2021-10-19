import React from "react";
import { useHistory } from "react-router";
// scss
import "./quanLyNguoiDung.scss";
//component
import ListUser from "./danhSachNguoiDung/ListUser";

export default function QuanLyNguoiDung() {
  const history = useHistory();
  return (
    <div className="quanLyNguoiDung">
      <span className="quanLyNguoiDungTitle">QUẢN LÝ NGƯỜI DÙNG</span>
      <button
        onClick={() => history.push("/admin/quanlynguoidung/themNguoiDung")}
        type="button"
        className="btn themNguoiDung"
      >
        Thêm Nguoif Dùng
      </button>
      <ListUser />
    </div>
  );
}
