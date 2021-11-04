import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CourseItem from "../CourseItem/CourseItem";
import { actLayDanhSachKhoaHoc } from "./module/action";
import "./CourseList.scss";
import Skeleton from "react-loading-skeleton";
import SkeletonLoading from "components/SkeletonLoading/SkeletonLoading";
import { useState } from "react";

export default function CourseList() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth > 1200);
  const { danhSachKhoaHoc, err } = useSelector(
    (state) => state.courseListReducer
  );
  useEffect(() => {
    setLoading(true);
    const timing = setTimeout(() => {
      dispatch(actLayDanhSachKhoaHoc());
      setLoading(false);
    }, 1000);
    window.addEventListener(
      "resize",
      () => {
        const ismobile = window.innerWidth > 1200;
        if (ismobile !== isMobile) setIsMobile(ismobile);
      },
      false
    );
    return () => clearTimeout(timing);
  }, [isMobile]);
  const renderKhoaHoc = () => {
    const dsKhoaHocMoi = danhSachKhoaHoc.slice(0, 8);
    console.log(dsKhoaHocMoi);
    return dsKhoaHocMoi.map((khoaHoc, index) => {
      return <CourseItem khoaHoc={khoaHoc} key={index} />;
    });
  };
  const RenderSkeleton = () => {
    return <SkeletonLoading />;
  };

  return (
    <section className="course" id="course">
      <h1 className="heading">các khóa học mới nhất</h1>
      <div className={`box-container ${isMobile ? "container-fluid" : ""}`}>
        {loading ? RenderSkeleton() : renderKhoaHoc()}
      </div>
    </section>
  );
}
