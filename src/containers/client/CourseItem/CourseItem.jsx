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

export default function CourseItem(props) {
  const { hinhAnh, tenKhoaHoc, moTa, luotXem } = props.khoaHoc;

  return (
    <div className="box">
        
      <img src={hinhAnh} alt />
      <h3 className="price">$50</h3>
      <div className="content">
      
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
            (<Icon icon={faEye} /> {luotXem})
          </i>
        </div>
        <a href="#" className="title">
          {tenKhoaHoc}
        </a>
        <p>{moTa}</p>
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
