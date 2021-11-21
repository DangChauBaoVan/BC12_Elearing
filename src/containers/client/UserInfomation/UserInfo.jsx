import Header from "components/Header/Header";
import React from "react";
import "./UserInfo.scss";
import userImage from "../../../assets/images/teacher-3.png";
import userBg from "../../../assets/images/bgUser.jpg";
import Footer from "components/Footer/Footer";
import Carousel from "components/Carousel/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { actGetUserInfo } from "../UserInfomation/module/action";
import { Redirect } from "react-router-dom";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalf,
  faClock,
  faCalendarAlt,
  faBook,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import quanLyKhoaHoc from "apis/QuanLyKhoaHoc";
export default function Userinfo() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.loginReducer);
  const { userInfo } = useSelector((state) => state.userInfoReducer);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const account = {
      taiKhoan: currentUser?.taiKhoan,
      matKhau: "string",
    };
    console.log(account);

    const timing = setTimeout(() => {
      dispatch(actGetUserInfo(account, currentUser?.accessToken));
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timing);
  }, []);
  const [isDisabledTK, setDisabledTK] = useState(false);
  const [isDisabledKH, setDisabledKH] = useState(true);
  const handleSwitchTabTK = () => {
    setDisabledTK(false);
    setDisabledKH(true);
  };

  const handleSwitchTabKH = () => {
    setDisabledTK(true);
    setDisabledKH(false);
  };
  const [result, setResult] = useState();
  useEffect(async () => {
    try {
      let result = await quanLyKhoaHoc.layDanhSachKhoaHoc();
      setResult(result.data);
    } catch (error) {
      setResult("err");
    }
  }, []);
  const { chiTietKhoaHocGhiDanh: ctkh } = userInfo;

  console.log(ctkh);
  const renderKhoaHoc = () => {
    let dskh = []
    console.log(ctkh);
    ctkh?.map(ctkh => {
      result?.map(result =>{
        if(result.maKhoaHoc === ctkh.maKhoaHoc){
          dskh.push(result)
        }
      })
    })
    console.log(dskh);
    
      return dskh?.map((kh, index) => {
        return (
          <div className="resultBox" key={index}>
            <div class="dropdown-divider"></div>
            <div className="row">
              <div className="col-4">
                <img src={kh.hinhAnh} alt="hinh" />
              </div>
              <div className="col-8  text-left">
                <div className="row">
                  <div className="col-9 col-md-8">
                    <div className="contentRight">
                      <div className="contentTitle">
                        <h3>{kh.tenKhoaHoc}</h3>
                      </div>
                      <div className="contentRating">
                        <div className="stars text-left">
                          <i className="fas fa-star">
                            <Icon icon={faStar} />
                          </i>
                          <i className="fas fa-star">
                            <Icon icon={faStar} />
                          </i>
                          <i className="fas fa-star">
                            <Icon icon={faStar} />
                          </i>
                          <i className="fas fa-star">
                            <Icon icon={faStar} />
                          </i>
                          <i className="fas fa-star">
                            <Icon icon={faStarHalf} />
                          </i>
                          <i
                            className="fas fa-star"
                            style={{ fontSize: "1.3rem", color: "#444" }}
                          >
                            {kh.luotXem}
                            (<Icon icon={faEye} />)
                          </i>
                        </div>
                      </div>
                      <div className="contentDescription">
                        <p>{kh.moTa}</p>
                      </div>
                      <p></p>
                    </div>
                  </div>
                  <div className="col-3 col-md-4 text-right">
                    <h2 className="price">$50</h2>
                    <button className="btn">Hủy</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      });
    
  };
  return currentUser ? (
    <>
      <Header />
      <div className="userInfo">
        <div>
          <div className="main-content pb-5">
            <div
              className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center userbg"
              style={{
                minHeight: 600,
                backgroundSize: "cover",
                backgroundPosition: "bottom center",
              }}
            ></div>
            {/* Page content */}
            <div className="container-fluid mt--7">
              <div className="row">
                <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0">
                  <div className="card card-profile shadow">
                    <div className="row justify-content-center">
                      <div className="col-lg-3 order-lg-2">
                        <div className="card-profile-image">
                          <a href="#">
                            <img src={userImage} className="rounded-circle" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                      <div className="d-flex justify-content-between">
                        <button
                          className="btn btn-sm btn-info mr-4"
                          onClick={handleSwitchTabTK}
                        >
                          Tài Khoản
                        </button>
                        <button
                          className="btn btn-sm btn-default float-right"
                          onClick={handleSwitchTabKH}
                        >
                          Khóa Học
                        </button>
                      </div>
                    </div>
                    <div className="card-body pt-0 pt-md-4">
                      <div className="text-center pt-5">
                        <h3>{userInfo.hoTen}</h3>

                        <hr className="my-4" />
                        <p>
                          {userInfo.hoTen} — the name taken by Melbourne-raised,
                          Brooklyn-based Nick Murphy — writes, performs and
                          records all of his own music.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-8 order-xl-1">
                  <div
                    className="card bg-secondary shadow"
                    className={isDisabledTK ? "disNone" : ""}
                  >
                    <div className="card-header bg-white border-0">
                      <div className="row align-items-center">
                        <div className="col-8">
                          <h3 className="mb-0">Thông Tin Tài Khoản</h3>
                        </div>
                        <div className="col-4 text-right">
                          <a href="#!" className="btn btn-sm btn-primary">
                            Cập Nhật
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="card-body bg-white">
                      <form>
                        <h6 className="heading-small text-muted mb-4">
                          User information
                        </h6>
                        <div className="pl-lg-4">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="form-group focused">
                                <label
                                  className="form-control-label"
                                  htmlFor="input-username"
                                >
                                  Tài Khoản
                                </label>
                                <input
                                  type="text"
                                  id="input-username"
                                  className="form-control form-control-alternative"
                                  placeholder="Username"
                                  value={userInfo.taiKhoan}
                                  defaultValue="lucky.jesse"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group">
                                <label
                                  className="form-control-label"
                                  htmlFor="input-email"
                                >
                                  Địa Chỉ Email
                                </label>
                                <input
                                  type="email"
                                  id="input-email"
                                  className="form-control form-control-alternative"
                                  placeholder="jesse@example.com"
                                  value={userInfo.email}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="form-group focused">
                                <label
                                  className="form-control-label"
                                  htmlFor="input-first-name"
                                >
                                  Họ Tên
                                </label>
                                <input
                                  type="text"
                                  id="input-first-name"
                                  className="form-control form-control-alternative"
                                  placeholder="First name"
                                  defaultValue="Lucky"
                                  value={userInfo.hoTen}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr className="my-4" />
                        {/* Address */}
                        <h6 className="heading-small text-muted mb-4">
                          Contact information
                        </h6>
                        <div className="pl-lg-4">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group focused">
                                <label
                                  className="form-control-label"
                                  htmlFor="input-address"
                                >
                                  Address
                                </label>
                                <input
                                  id="input-address"
                                  className="form-control form-control-alternative"
                                  placeholder="Home Address"
                                  defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                                  type="text"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-4">
                              <div className="form-group focused">
                                <label
                                  className="form-control-label"
                                  htmlFor="input-city"
                                >
                                  City
                                </label>
                                <input
                                  type="text"
                                  id="input-city"
                                  className="form-control form-control-alternative"
                                  placeholder="City"
                                  defaultValue="New York"
                                />
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="form-group focused">
                                <label
                                  className="form-control-label"
                                  htmlFor="input-country"
                                >
                                  Country
                                </label>
                                <input
                                  type="text"
                                  id="input-country"
                                  className="form-control form-control-alternative"
                                  placeholder="Country"
                                  defaultValue="United States"
                                />
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="form-group">
                                <label
                                  className="form-control-label"
                                  htmlFor="input-country"
                                >
                                  Postal code
                                </label>
                                <input
                                  type="number"
                                  id="input-postal-code"
                                  className="form-control form-control-alternative"
                                  placeholder="Postal code"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        
                      </form>
                    </div>
                  </div>
                  <div
                    className="card bg-secondary shadow"
                    className={isDisabledKH ? "disNone" : ""}
                  >
                    <div className="card-header bg-white border-0">
                      <div className="row align-items-center">
                        <div className="col-8">
                          <h3 className="mb-0">Thông Tin Khóa Học</h3>
                        </div>
                      </div>
                    </div>
                    <div className="card-body bg-white khoaHoc">{renderKhoaHoc()}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <Redirect to="/" />
  );
}
