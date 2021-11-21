/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import Header from "components/Header/Header";
import React from "react";
import { useParams } from "react-router";
import "./CourseDetails.scss";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalf,
  faClock,
  faCalendarAlt,
  faBook,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "components/Footer/Footer";
import { actDangKyKhoaHoc, actGetCourseDetail } from "./module/action";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import pic1 from "../../../assets/images/pic-1.png";
import pic2 from "../../../assets/images/pic-2.png";
import pic3 from "../../../assets/images/pic-3.png";
import pic4 from "../../../assets/images/pic-4.png";
import pic5 from "../../../assets/images/pic-5.png";
import pic6 from "../../../assets/images/pic-6.png";
import "swiper/swiper.scss";
import { actGetCourseByCataLog } from "../CourseCatalog/module/action";
import quanLyKhoaHoc from "apis/QuanLyKhoaHoc";
import Loader from "components/Loading/Loader";
import SkeletonLoading from "components/SkeletonLoading/SkeletonLoading";

export default function CourseDetails() {
  const { courseID } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { courseInfo, err } = useSelector((state) => state.courseInfoReducer);
  const { currentUser } = useSelector((state) => state.loginReducer);
  SwiperCore.use([Autoplay]);

  useEffect(() => {
    setLoading(true);
    const timing = setTimeout(() => {
      dispatch(actGetCourseDetail(courseID));

      setLoading(false);
    }, 1000);
    return () => clearTimeout(timing);
  }, []);
  const [dsKH, setDSKH] = useState([]);
  useEffect(async () => {
    try {
      let result = await quanLyKhoaHoc.layDSKhoaHocTheoDanhMuc(
        courseInfo.danhMucKhoaHoc?.maDanhMucKhoahoc
      );
      setDSKH(result.data);
    } catch (error) {
      setDSKH("err");
    }
  }, [courseInfo]);
  
  const handleDangKyKhoaHoc = () => {
    if (!currentUser) {
      let loginForm = document.querySelector(".login-form-container");
      loginForm.classList.toggle("active");
      return;
    }
    const thongTinDangKy = {
      maKhoaHoc: courseID,
      taiKhoan: currentUser.taiKhoan,
    };
    
    dispatch(actDangKyKhoaHoc(thongTinDangKy, currentUser.accessToken));
  };
  const renderSimilarCourse = () => {
    if (dsKH === "err") {
      return;
    } else {
      console.log(dsKH);
      return dsKH.map((item, index) => (
        <SwiperSlide key={index}>
          <a href="#" className="swiper-slide boxes">
            <div className="image">
              <img src={item.hinhAnh} alt />
            </div>
            <div className="content">
              <h3>{item.tenKhoaHoc}</h3>
              <div className="price2">
                $15.99 <span>$20.99</span>
              </div>
              <div className="stars">
                <i className="fas fa-star">
                  {" "}
                  <Icon icon={faStar} />
                </i>
                <i className="fas fa-star">
                  {" "}
                  <Icon icon={faStar} />
                </i>
                <i className="fas fa-star">
                  {" "}
                  <Icon icon={faStar} />
                </i>
                <i className="fas fa-star">
                  {" "}
                  <Icon icon={faStar} />
                </i>
                <i className="fas fa-star">
                  {" "}
                  <Icon icon={faStar} />
                </i>
              </div>
            </div>
          </a>
        </SwiperSlide>
      ));
    }
  };

  return (
    <div>
      <Header />
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="courseTop">
            <div className="courseTopContent">
              <div className="row text-left">
                <div className="col-6 text-left ">
                  <div className="contentLeft">
                    <h1>{courseInfo.tenKhoaHoc}</h1>
                    <div className="stars">
                      <span>Đánh giá khóa học:</span>
                      <i className="fas fa-star">
                        {" "}
                        <Icon icon={faStar} />
                      </i>
                      <i className="fas fa-star">
                        {" "}
                        <Icon icon={faStar} />
                      </i>
                      <i className="fas fa-star">
                        {" "}
                        <Icon icon={faStar} />
                      </i>
                      <i className="fas fa-star">
                        {" "}
                        <Icon icon={faStar} />
                      </i>
                      <i className="fas fa-star">
                        {" "}
                        <Icon icon={faStar} />
                      </i>
                      <i
                        className="fas fa-star"
                        style={{ fontSize: "1.3rem", color: "#444" }}
                      >
                        ({" "}
                        <Icon icon={faEye} style={{ color: "#fff" }}>
                          {courseInfo.luotXem}
                        </Icon>
                        )
                      </i>
                    </div>
                    <div className="creator">
                      <span>Create By:</span>{" "}
                      <i>{courseInfo.nguoiTao?.hoTen}</i>
                    </div>
                    <br />
                    <button onClick={handleDangKyKhoaHoc} className="btn">
                      ĐĂNG KÝ
                    </button>
                  </div>
                </div>
                <div className="col-6 ">
                  <div className="contentRight">
                    <img src={courseInfo.hinhAnh} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="courseTopContent2">
              <div className="text-left">
                <div className="contentHinhAnh">
                  <img src={courseInfo.hinhAnh} alt="" />
                </div>
                <h1>{courseInfo.tenKhoaHoc}</h1>
                <div className="stars">
                  <span>Đánh giá khóa học:</span>
                  <i className="fas fa-star">
                    {" "}
                    <Icon icon={faStar} />
                  </i>
                  <i className="fas fa-star">
                    {" "}
                    <Icon icon={faStar} />
                  </i>
                  <i className="fas fa-star">
                    {" "}
                    <Icon icon={faStar} />
                  </i>
                  <i className="fas fa-star">
                    {" "}
                    <Icon icon={faStar} />
                  </i>
                  <i className="fas fa-star">
                    {" "}
                    <Icon icon={faStar} />
                  </i>
                  <i
                    className="fas fa-star"
                    style={{ fontSize: "1.3rem", color: "#444" }}
                  >
                    ({" "}
                    <Icon icon={faEye} style={{ color: "#fff" }}>
                      {courseInfo.luotXem}
                    </Icon>
                    )
                  </i>
                </div>
                <div className="creator">
                  <span>Create By:</span> <i>{courseInfo.nguoiTao?.hoTen}</i>
                </div>
                <br />
                <button onClick={handleDangKyKhoaHoc} className="btn">
                  ĐĂNG KÝ
                </button>
                {/* <div className="col-6 text-left ">
              <div className="contentLeft">
                <h1>{courseInfo.tenKhoaHoc}</h1>
                <div className="stars">
                  <span>Đánh giá khóa học:</span>
                  <i className="fas fa-star">
                    {" "}
                    <Icon icon={faStar} />
                  </i>
                  <i className="fas fa-star">
                    {" "}
                    <Icon icon={faStar} />
                  </i>
                  <i className="fas fa-star">
                    {" "}
                    <Icon icon={faStar} />
                  </i>
                  <i className="fas fa-star">
                    {" "}
                    <Icon icon={faStar} />
                  </i>
                  <i className="fas fa-star">
                    {" "}
                    <Icon icon={faStar} />
                  </i>
                  <i
                    className="fas fa-star"
                    style={{ fontSize: "1.3rem", color: "#444" }}
                  >
                    ({" "}
                    <Icon icon={faEye} style={{ color: "#fff" }}>
                      {courseInfo.luotXem}
                    </Icon>
                    )
                  </i>
                </div>
                <div className="creator">
                  <span>Create By:</span> <i>{courseInfo.nguoiTao?.hoTen}</i>
                </div>
                <br />
                <button onClick={handleDangKyKhoaHoc} className="btn">
                  ĐĂNG KÝ
                </button>
              </div>
            </div>
            <div className="col-6 ">
              <div className="contentRight">
                <img src={courseInfo.hinhAnh} alt="" />
              </div>
            </div> */}
              </div>
            </div>
          </div>
          <div className="courseBottom container">
            <h1 className="ccHeading">
              Giới thiệu khóa học {courseInfo.tenKhoaHoc}
            </h1>
            <p>{courseInfo.moTa}</p>
          </div>
          <section className="arrivals" id="arrivals">
            <h1 className="heading5">
              {" "}
              <span>Các Khóa Tương Tự</span>{" "}
            </h1>
            <div className="swiper arrivals-slider">
              <Swiper
                // install Swiper modules

                spaceBetween={20}
                slidesPerView={3}
                centeredSlides={true}
                loop={true}
                grabCursor={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
              >
                <div className="swiper-wrapper">{renderSimilarCourse()}</div>
              </Swiper>
            </div>
          </section>
          <section className="reviews mt-5" id="reviews">
            <h1 className="heading5">
              {" "}
              <span>Học viên đánh giá</span>{" "}
            </h1>
            <div className="swiper reviews-slider">
              <Swiper
                // install Swiper modules

                spaceBetween={20}
                slidesPerView={3}
                centeredSlides={true}
                loop={true}
                grabCursor={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
              >
                <div className="swiper-wrapper">
                  <SwiperSlide>
                    <div className="swiper-slide box">
                      <img src={pic1} alt />
                      <h3>Học Viên A</h3>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Aspernatur nihil ipsa placeat. Aperiam at sint,
                        eos ex similique facere hic.
                      </p>
                      <div className="stars">
                        <i className="fas fa-star">
                          {" "}
                          <Icon icon={faStar} />
                        </i>
                        <i className="fas fa-star">
                          {" "}
                          <Icon icon={faStar} />
                        </i>
                        <i className="fas fa-star">
                          {" "}
                          <Icon icon={faStar} />
                        </i>
                        <i className="fas fa-star">
                          {" "}
                          <Icon icon={faStar} />
                        </i>
                        <i className="fas fa-star">
                          {" "}
                          <Icon icon={faStar} />
                        </i>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide box">
                      <img src={pic2} alt />
                      <h3>Học Viên B</h3>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Aspernatur nihil ipsa placeat. Aperiam at sint,
                        eos ex similique facere hic.
                      </p>
                      <div className="stars">
                        <i className="fas fa-star">
                          {" "}
                          <Icon icon={faStar} />
                        </i>
                        <i className="fas fa-star">
                          {" "}
                          <Icon icon={faStar} />
                        </i>
                        <i className="fas fa-star">
                          {" "}
                          <Icon icon={faStar} />
                        </i>
                        <i className="fas fa-star">
                          {" "}
                          <Icon icon={faStar} />
                        </i>
                        <i className="fas fa-star">
                          {" "}
                          <Icon icon={faStar} />
                        </i>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide box">
                      <img src={pic3} alt />
                      <h3>Học viên c</h3>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Aspernatur nihil ipsa placeat. Aperiam at sint,
                        eos ex similique facere hic.
                      </p>
                      <div className="stars">
                        <i className="fas fa-star">
                          {" "}
                          <Icon icon={faStar} />
                        </i>
                        <i className="fas fa-star">
                          {" "}
                          <Icon icon={faStar} />
                        </i>
                        <i className="fas fa-star">
                          {" "}
                          <Icon icon={faStar} />
                        </i>
                        <i className="fas fa-star">
                          {" "}
                          <Icon icon={faStar} />
                        </i>
                        <i className="fas fa-star">
                          {" "}
                          <Icon icon={faStar} />
                        </i>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide box">
                      <img src={pic4} alt />
                      <h3>Học viên d</h3>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Aspernatur nihil ipsa placeat. Aperiam at sint,
                        eos ex similique facere hic.
                      </p>
                      <div className="stars">
                        <i className="fas fa-star">
                          {" "}
                          <Icon icon={faStar} />
                        </i>
                        <i className="fas fa-star">
                          {" "}
                          <Icon icon={faStar} />
                        </i>
                        <i className="fas fa-star">
                          {" "}
                          <Icon icon={faStar} />
                        </i>
                        <i className="fas fa-star">
                          {" "}
                          <Icon icon={faStar} />
                        </i>
                        <i className="fas fa-star">
                          {" "}
                          <Icon icon={faStar} />
                        </i>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide box">
                      <img src={pic5} alt />
                      <h3>Học viên e</h3>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Aspernatur nihil ipsa placeat. Aperiam at sint,
                        eos ex similique facere hic.
                      </p>
                      <div className="stars">
                        <i className="fas fa-star">
                          {" "}
                          <Icon icon={faStar} />
                        </i>
                        <i className="fas fa-star">
                          {" "}
                          <Icon icon={faStar} />
                        </i>
                        <i className="fas fa-star">
                          {" "}
                          <Icon icon={faStar} />
                        </i>
                        <i className="fas fa-star">
                          {" "}
                          <Icon icon={faStar} />
                        </i>
                        <i className="fas fa-star">
                          {" "}
                          <Icon icon={faStar} />
                        </i>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide box">
                      <img src={pic6} alt />
                      <h3>Học viên f</h3>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Aspernatur nihil ipsa placeat. Aperiam at sint,
                        eos ex similique facere hic.
                      </p>
                      <div className="stars">
                        <i className="fas fa-star">
                          {" "}
                          <Icon icon={faStar} />
                        </i>
                        <i className="fas fa-star">
                          {" "}
                          <Icon icon={faStar} />
                        </i>
                        <i className="fas fa-star">
                          {" "}
                          <Icon icon={faStar} />
                        </i>
                        <i className="fas fa-star">
                          {" "}
                          <Icon icon={faStar} />
                        </i>
                        <i className="fas fa-star">
                          {" "}
                          <Icon icon={faStar} />
                        </i>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              </Swiper>
            </div>
          </section>
        </>
      )}

      <Footer />
    </div>
  );
}
