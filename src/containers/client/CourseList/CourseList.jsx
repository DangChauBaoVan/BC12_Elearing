import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CourseItem from "../CourseItem/CourseItem";
import { actLayDanhSachKhoaHoc } from "./module/action";
import "./CourseList.scss";
import Skeleton from "react-loading-skeleton";
import SkeletonLoading from "components/SkeletonLoading/SkeletonLoading";
import { useState } from "react";
import useWindowDimensions from "components/GetViewPort/GetWindowDimensions";

export default function CourseList() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  
  const { danhSachKhoaHoc, err } = useSelector(
    (state) => state.courseListReducer
  );
  useEffect(() => {
    setLoading(true);
    const timing = setTimeout(() => {
      dispatch(actLayDanhSachKhoaHoc());
      setLoading(false);
    }, 3000);
    
    return () => clearTimeout(timing);
  }, []);
  const {width} = useWindowDimensions();
  console.log(width);
  const renderKhoaHoc = () => {
    const dsKhoaHocMoi = danhSachKhoaHoc.slice(0, 8);
    // console.log(dsKhoaHocMoi);
    return dsKhoaHocMoi.map((khoaHoc, index) => {
      return <CourseItem khoaHoc={khoaHoc} key={index} />;
    });
  };
  const RenderSkeleton = () => {
    return <SkeletonLoading amountItems={8} />;
  };

  return (
    <section className="course" id="course">
      <h1 className="ccHeading">các khóa học mới nhất</h1>
      <div className="box-container" className={width > 1600 ? "box-container container-fluid" : "box-container"}>
        {loading ? RenderSkeleton() : renderKhoaHoc()}
      </div>
    </section>
  );
}
