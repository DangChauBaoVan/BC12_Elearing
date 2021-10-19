import React from "react";

//scss
import './timNguoiDung.scss'

export default function TimNguoiDung({searchValue}) {
  return (
    <nav className="navbar navbar-light timNguoiDung">
      <form className="form-inline">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Tên người dùng"
          aria-label="Search"
          onChange={searchValue}
        />
      </form>
    </nav>
  );
}
