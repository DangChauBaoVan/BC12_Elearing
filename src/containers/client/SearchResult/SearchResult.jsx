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
import "./SearchResult.scss"
export default function SearchResult(props) {
  const { searchValue } = useParams();
  console.log(searchValue);
  return (
    <div>
      <Header />
      <section className="searchResult container">
        <h1 className="heading">Tìm thấy 5 khóa học {searchValue}</h1>
        <div className="resultBox">
          <div class="dropdown-divider"></div>
          <div className="row">
            <div className="col-4">
              <img src="https://picsum.photos/200" alt="hinh" />
            </div>
            <div className="col-8 text-left">
              <div className="contentRight">
                <div className="contentTitle">
                  <h3>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ipsum, ducimus.
                  </h3>
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
                      (<Icon icon={faEye} />)
                    </i>
                  </div>
                </div>
                <div className="contentDescription">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                    natus quae dolore blanditiis quaerat quidem maxime, eos
                    enim, inventore iure tenetur accusantium nihil voluptate
                    atque consectetur quasi obcaecati autem. Reprehenderit
                    pariatur minus vitae facere corporis mollitia explicabo
                    suscipit perspiciatis incidunt nihil fugiat, doloribus
                    laborum voluptatem, aliquid modi nam repudiandae doloremque!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
