import React from "react";
import "./Header.scss";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShoppingCart,
  faUser,
  faSearch,
  faBookOpen,
  faHome,
  faList,
  faComment,
  faBlog,
} from "@fortawesome/free-solid-svg-icons";
import Login from "containers/shared/Auth/Login/Login";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { actLogOut } from "containers/shared/Auth/Login/module/action";
import { Link } from "react-router-dom";

const handleOnClick = () => {
  let loginForm = document.querySelector(".login-form-container");
  loginForm.classList.toggle("active");
};
const clickSearch = () => {
  let searchForm = document.querySelector(".search-form");
  searchForm.classList.toggle("active");
};
export default function Header() {
  const { currentUser } = useSelector((state) => state.loginReducer);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(actLogOut());
  }
  return (
    <div>
      <header className="header">
        <div className="header-1">
          <a href="#" className="logo">
            <Icon icon={faBookOpen} /> <i className="" /> E-Learning{" "}
          </a>
          <form className="search-form">
            <input
              type="search"
              name
              placeholder="Tìm khóa học"
              id="search-box"
            />
            <label htmlFor="search-box" className="fas fa-search">
              <Icon icon={faSearch} />
            </label>
          </form>

          <div className="icons">
            <div
              id="search-btn"
              className="fas fa-search"
              onClick={clickSearch}
            >
              <Icon icon={faSearch} />
            </div>
            <a href="#" className="fas fa-heart">
              <Icon icon={faHeart} className="faEditIcon" />
            </a>
            <a href="#" className="fas fa-shopping-cart">
              <Icon icon={faShoppingCart} className="faEditIcon" />
            </a>
            {currentUser ? (
              <a id="login-btn" className="dropdown">
                <a
                  data-toggle="dropdown"
                  data-display="static"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img src="https://picsum.photos/200" alt="" />
                </a>
                <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg-right">
                  <button className="dropdown-item" type="button">
                    <div className="itemConent d-flex  align-items-center">
                      <img src="https://picsum.photos/200" alt="" />
                      <div className="itemInfo d-flex flex-column">
                        <p>Chào! {currentUser.hoTen}</p>
                        <p>{currentUser.email}</p>
                      </div>
                    </div>
                  </button>
                  <div class="dropdown-divider"></div>
                  {currentUser.maLoaiNguoiDung === "GV" ? (
                    <>
                      <Link to="/admin" className="dropdown-item" type="button">
                        Admin
                      </Link>
                      <div class="dropdown-divider"></div>
                    </>
                  ) : (
                    <></>
                  )}

                  <a className="dropdown-item" type="button" onClick={handleLogOut}>
                    Thoát
                  </a>
                </div>
              </a>
            ) : (
              <a id="login-btn" className="fas fa-user" onClick={handleOnClick} style={{fontSize:"2.5rem"}}>
                <Icon icon={faUser} className="faEditIcon" />
              </a>
            )}
          </div>
        </div>
        <div className="header-2">
          <nav className="navbar2">
            <a href="#home">Trang Chủ</a>
            <a href="#featured" id="category">
              Danh Mục
            </a>
            <div className="categoryContent">
              <nav id="categoryNavbar">
                <a href="#home">Trang Chủ</a>
                <a href="#featured">Danh Mục</a>

                <a href="#reviews">Đánh Giá</a>
                <a href="#arrivals">Liên Hệ</a>
              </nav>
            </div>

            <a href="#reviews">Đánh Giá</a>
            <a href="#arrivals">Liên Hệ</a>
          </nav>
        </div>
        <Login />
        <nav className="bottom-navbar">
          <a href="#home" className="fas fa-home">
            <Icon icon={faHome} />
          </a>
          <a href="#featured" className="fas fa-list" id="listContent">
            <Icon icon={faList} />
          </a>
          <div className="categoryContent">
            <nav id="categoryNavbar">
              <a href="#home">Trang Chủ</a>
              <a href="#featured">Danh Mục</a>

              <a href="#reviews">Đánh Giá</a>
              <a href="#arrivals">Liên Hệ</a>
            </nav>
          </div>
          <a href="#reviews" className="fas fa-comments">
            <Icon icon={faComment} />
          </a>
          <a href="#blogs" className="fas fa-blog">
            <Icon icon={faBlog} />
          </a>
        </nav>
      </header>
    </div>
  );
}
