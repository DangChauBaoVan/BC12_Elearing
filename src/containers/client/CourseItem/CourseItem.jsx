import React from "react";
import "./CourseItem.scss";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalf,
  faClock,
  faCalendarAlt,
  faBook,
  faEye,
} from "@fortawesome/free-solid-svg-icons";

import Skeleton from "react-loading-skeleton";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function CourseItem(props) {
  const { hinhAnh, tenKhoaHoc, moTa, luotXem,maKhoaHoc } = props.khoaHoc;

  return (
    <div className="box">
      <img src={hinhAnh} onError={(e)=>{e.target.onerror = null; e.target.src="https://picsum.photos/200/300"}} alt />
      <h3 className="price">$50</h3>
      <div className="content text-left">
        <div className="stars">
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
            (<Icon icon={faEye} /> {luotXem})
          </i>
        </div>
        <Link to={`/courseDetails/${maKhoaHoc}`} className="title ">
          {tenKhoaHoc}
        </Link>
        <div className="moTa">
          <p>{moTa}</p>
        </div>

        <div className="info">
          <h3>
            {" "}
            <i className="far fa-clock">
              <Icon icon={faClock} />
            </i>{" "}
            2 hours{" "}
          </h3>
          <h3>
            {" "}
            <i className="far fa-calendar-alt">
              <Icon icon={faCalendarAlt} />
            </i>{" "}
            6 months{" "}
          </h3>
          <h3>
            {" "}
            <i className="fas fa-book">
              <Icon icon={faBook} />
            </i>{" "}
            12 modules{" "}
          </h3>
        </div>
      </div>
    </div>
  );
}
