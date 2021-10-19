import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

//scss
import "./timNguoiDung.scss";

export default function TimNguoiDung({ searchValue }) {
  return (
    <nav className="navbar-light timNguoiDung">
      <form className="form-inline">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Tên người dùng"
          aria-label="Search"
          onChange={searchValue}
        />
        <span className="iconSearch">
          <Icon icon={faSearch} />
        </span>
      </form>
    </nav>
  );
}
