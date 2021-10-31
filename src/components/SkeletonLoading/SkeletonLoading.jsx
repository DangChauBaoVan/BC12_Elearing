import React from "react";
import Skeleton from "react-loading-skeleton";
export default function SkeletonLoading() {
  return (
    <>
      {Array(8)
        .fill()
        .map((item, index) => (
          <div className="box" key={index}>
            <Skeleton width={"100%"} height={"20rem"} />
            <div className="content">
              <div className="stars text-left">
                <Skeleton count={1} width={"100%"} />
              </div>
              <a href="#" className="title">
                <Skeleton count={1} width={"95%"} />
              </a>
              <p>
                <Skeleton count={1} width={"90%"} />
                <Skeleton count={1} width={"80%"} />
                <Skeleton count={1} width={"70%"} />
              </p>
              <div className="dropdown-divider"></div>
              <div >
              <Skeleton count={1} width={"90%"} />
                
              </div>
            </div>
          </div>
        ))}
    </>
  );
}
