import React from "react";

export default function TimKhoaHoc({searchValue}) {
  return (
    <nav
      className="navbar navbar-light timNguoiDung"
      style={{ marginLeft: "-18px", marginTop: "0" }}
    >
      <form className="form-inline">
        <input
        onChange={searchValue}
          className="form-control mr-sm-2"
          type="search"
          placeholder="Tên khóa học"
          aria-label="Search"
        />
      </form>
    </nav>
  );
}
