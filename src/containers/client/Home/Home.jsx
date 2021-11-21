import Header from "components/Header/Header";
import React from "react";
import CourseList from "../CourseList/CourseList";
import "./Home.scss";
import Aos from "aos";
import { useEffect } from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {
  faQuoteLeft,
  faQuoteRight,
  faPhone,
  faEnvelope,
  faUser,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import paperAirPlane from "../../../assets/images/paperPlane.png"
import Footer from "components/Footer/Footer";
import ScrollToTop from "components/ScrollToTop/ScrollToTop";
import Carousel from "components/Carousel/Carousel";
export default function Home() {
    useEffect(function () {
        Aos.init({
          duration: 3000,
        });
      }, []);

  return (
    <div id="home">
      <Header />
      <Carousel/>
      <CourseList />
      <section id="testimonial">
        <h1 className="heading2">Học Viên nói gì?</h1>
        <div className="box-container">
          <div className="box2" data-aos="flip-left">
            <img src="https://picsum.photos/200" alt />
            <div className="info">
              <p>
                <i className="fas fa-quote-left">
                  <Icon icon={faQuoteLeft} />
                </i>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam quae minima pariatur consequatur odio veniam nam
                dolorum enim eum a?
                <i className="fas fa-quote-right">
                  <Icon icon={faQuoteRight} />
                </i>
              </p>
              <h2>--someone's name</h2>
            </div>
          </div>
          <div className="box2" data-aos="flip-right">
            <img src="https://picsum.photos/200" alt />
            <div className="info">
              <p>
                <i className="fas fa-quote-left">
                  <Icon icon={faQuoteLeft} />
                </i>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam quae minima pariatur consequatur odio veniam nam
                dolorum enim eum a?
                <i className="fas fa-quote-right">
                  <Icon icon={faQuoteRight} />
                </i>
              </p>
              <h2>--someone's name</h2>
            </div>
          </div>
          <div className="box2" data-aos="flip-left">
            <img src="https://picsum.photos/200" alt />
            <div className="info">
              <p>
                <i className="fas fa-quote-left">
                  <Icon icon={faQuoteLeft} />
                </i>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam quae minima pariatur consequatur odio veniam nam
                dolorum enim eum a?
                <i className="fas fa-quote-right">
                  <Icon icon={faQuoteRight} />
                </i>
              </p>
              <h2>--someone's name</h2>
            </div>
          </div>
          <div className="box2" data-aos="flip-right">
            <img src="https://picsum.photos/200" alt />
            <div className="info">
              <p>
                <i className="fas fa-quote-left">
                  <Icon icon={faQuoteLeft} />
                </i>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam quae minima pariatur consequatur odio veniam nam
                dolorum enim eum a?
                <i className="fas fa-quote-right">
                  <Icon icon={faQuoteRight} />
                </i>
              </p>
              <h2>--someone's name</h2>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="container-fluid">
        <h1 className="heading">liên hệ tư vấn</h1>
        <div className="row min-vh-75 align-items-center min-vw-100">
          <div className="col-lg-5 col-md-8  mx-auto">
            <form action data-aos="zoom-in">
              <div className="form-field">
                <input type="text" className="form-input" placeholder=" " />
                <label htmlFor="name" className="form-label">
                  <Icon icon={faUser} /> User
                </label>
              </div>
              <div className="form-field">
                <input type="text" className="form-input" placeholder=" " />
                <label htmlFor="name" className="form-label">
                  <Icon icon={faEnvelope} /> Email
                </label>
              </div>
              <div className="form-field">
                <input type="text" className="form-input" placeholder=" " />
                <label htmlFor="name" className="form-label">
                  <Icon icon={faPhone} rotation={90} /> Phone
                </label>
              </div>

              <div className="form-field">
                <textarea
                  name
                  id
                  cols={30}
                  rows={10}
                  required
                  placeholder=" "
                  className="text-area"
                />
                <label htmlFor="name" className="form-label-text-area">
                  <Icon icon={faComment} /> Message
                </label>
              </div>
              <div className="form-field dangKyButton">
                <input type="submit" placeholder="Đăng Ký Tư Vấn" value="Đăng Ký Tư Vấn "/>
              </div>
            </form>
          </div>
        </div>
        <div className="floating-dot-left">
          <img
            src="https://cybersoft.edu.vn/wp-content/uploads/2019/10/banner-effect-2.png"
            alt
          />
        </div>
        <div className="floating-dot-right">
          <img
            src="https://cybersoft.edu.vn/wp-content/uploads/2019/10/banner-effect-2.png"
            alt
          />
        </div>
        <div className="paper-airplane">
          <img src={paperAirPlane} alt />
        </div>
      </section>

      <Footer/>
      <ScrollToTop/>
    </div>
  );
}
