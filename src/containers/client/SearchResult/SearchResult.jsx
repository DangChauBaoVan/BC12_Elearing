import Header from "components/Header/Header";
import React from "react";
import { useParams } from "react-router";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalf,
  faClock,
  faCalendarAlt,
  faBook,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import "./SearchResult.scss";
import { useEffect } from "react";
import { useState } from "react";
import quanLyKhoaHoc from "apis/QuanLyKhoaHoc";
import Footer from "components/Footer/Footer";
export default function SearchResult(props) {
  const { searchValue } = useParams();
  const [searchResult, setResult] = useState();
  useEffect(async () => {
    try {
      let result = await quanLyKhoaHoc.layDanhSachKhoaHoc(searchValue);
      setResult(result.data);
    } catch (error) {
      setResult("err");
    }
  }, [searchValue]);
  console.log(searchResult);
  const renderResult = () => {
    if (searchResult === undefined) {
      return;
    }
    if (searchResult === "err") {
      return (
        <section className="searchResult container text-left">
          <h1 >
            Xin lỗi, chúng tôi không tìm thấy kết quả nào cho {searchValue}
          </h1>
          <h2>Hãy thử điều chỉnh tìm kiếm của bạn. Đây là một số ý tưởng:</h2>
          <div className="resultBox ml-5">
            <ul>
              <li>Hãy chắc chắn rằng tất cả các từ đều đúng chính tả</li>
              <li>Thử các cụm từ tìm kiếm khác</li>
              <li>Thử các cụm từ tìm kiếm chung</li>
            </ul>
          </div>
        </section>
      );
    }
    return (
      <section className="searchResult container">
        <h1 className="heading">
          Tìm thấy  {searchResult.length}  khóa học "{searchValue}"
        </h1>
        {searchResult.map((item, index) => {
          return (
            <div className="resultBox" key={index}>
              <div class="dropdown-divider"></div>
              <div className="row">
                <div className="col-4">
                  <img src={item.hinhAnh} alt="hinh" />
                </div>
                <div className="col-8 text-left">
                  <div className="row">
                    <div className="col-10">
                      <div className="contentRight">
                        <div className="contentTitle">
                          <h3>{item.tenKhoaHoc}</h3>
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
                              {item.luotXem}
                              (<Icon icon={faEye} />)
                            </i>
                          </div>
                        </div>
                        <div className="contentDescription">
                          <p>{item.moTa}</p>
                        </div>
                        <p></p>
                      </div>
                    </div>
                    <div className="col-2 text-right">
                      <h2 className="price">$50</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    );
  };
  return (
    <div>
      <Header />
      {renderResult()}
      <Footer />
    </div>
  );
}
