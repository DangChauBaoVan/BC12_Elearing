import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function TimKhoaHoc({ searchValue }) {
  return (
    <nav className="navbar-light timNguoiDung">
      <form className="form-inline">
        <input
          onChange={searchValue}
          className="form-control mr-sm-2"
          type="search"
          placeholder="Tên khóa học"
          aria-label="Search"
        />
        <span className="iconSearch">
          <Icon icon={faSearch} />
        </span>
      </form>
    </nav>
  );
}
