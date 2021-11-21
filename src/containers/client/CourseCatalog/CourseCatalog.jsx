import Header from "components/Header/Header";
import React from "react";
import "./CourseCatalog.scss";
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
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { actGetCourseByCataLog } from "./module/action";
import { useRef } from "react";
import { useCallback } from "react";
import SkeletonLoading from "components/SkeletonLoading/SkeletonLoading";
import { Link } from "react-router-dom";
import useWindowDimensions from "components/GetViewPort/GetWindowDimensions";
export default function CourseCatalog() {
  const dispatch = useDispatch();
  const { courseCatalogId } = useParams();
  const [loading, setLoading] = useState(false);
  const { danhSachKhoaHoc, err } = useSelector(
    (state) => state.courseCatalogReducer
  );
  useEffect(() => {
    setLoading(true);
    const timing = setTimeout(() => {
      dispatch(actGetCourseByCataLog(courseCatalogId));
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timing);
  }, [courseCatalogId]);
  const RenderSkeleton = () => {
    return <SkeletonLoading amountItems={4} />;
  };
  const {width} = useWindowDimensions()
  return (
    <>
      <Header />
      <h1 class="ccHeading">
        {" "}
        {danhSachKhoaHoc[0]?.danhMucKhoaHoc.tenDanhMucKhoaHoc}
      </h1>
      <div className={width > 1600 ? "courseCatalog container-fluid": "courseCatalog "} >
        {loading
          ? RenderSkeleton()
          : danhSachKhoaHoc.map((kh, index) => {
              return (
                <div className="ccBox" key={index}>
                  <span className="amount">$69.69</span>
                  <img src={kh.hinhAnh} alt />
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
                    <i
                      className="fas fa-star"
                      style={{ fontSize: "1.3rem", color: "#444" }}
                    >
                      (<Icon icon={faEye} /> {kh.luotXem})
                    </i>
                  </div>
                  <h3 className="tenKhoaHoc">{kh.tenKhoaHoc}</h3>
                  <div className="moTa">
                    <p>{kh.moTa}</p>
                  </div>
                  <div className="xemThem">
                    <Link to={`/courseDetails/${kh.maKhoaHoc}`} className="btn">
                      Xem Thêm
                    </Link>
                  </div>

                  <div className="icons bottomContent">
                    <p>
                      {" "}
                      <i className="far fa-clock">
                        <Icon icon={faClock} />
                      </i>{" "}
                      2 hours{" "}
                    </p>
                    <p>
                      {" "}
                      <i className="far fa-calendar">
                        {" "}
                        <Icon icon={faCalendarAlt} />
                      </i>{" "}
                      6 months{" "}
                    </p>
                    <p>
                      {" "}
                      <i className="fas fa-book">
                        {" "}
                        <Icon icon={faBook} />
                      </i>{" "}
                      12 modules{" "}
                    </p>
                  </div>
                </div>
              );
            })}
      </div>

      <Footer />
    </>
  );
}
