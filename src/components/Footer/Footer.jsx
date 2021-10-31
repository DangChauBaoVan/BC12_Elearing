import React from "react";
import "./Footer.scss"
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarked
} from "@fortawesome/free-solid-svg-icons";
export default function Footer() {
  return (
    <section className="footer text-left">
      <div className="box-container">
        <div className="box">
          <h3>about us</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
            maxime!
          </p>
        </div>
        <div className="box">
          <h3>quick links</h3>
          <a href="#">home</a>
          <a href="#">course</a>
          <a href="#">teacher</a>
          <a href="#">price</a>
          <a href="#">review</a>
          <a href="#">contact</a>
        </div>
        <div className="box">
          <h3>follow us</h3>
          <a href="#">facebook</a>
          <a href="#">twitter</a>
          <a href="#">instagram</a>
          <a href="#">linkedin</a>
        </div>
        <div className="box">
          <h3>contact us</h3>
          <p>
            {" "}
            <i className="fas fa-phone" ><Icon icon={faPhone}/></i> +123-456-7890{" "}
          </p>
          <p>
            {" "}
            <i className="fas fa-envelope"><Icon icon={faEnvelope}/></i> elearning@gmail.com{" "}
          </p>
          <p>
            {" "}
            <i className="fas fa-map-marker-alt" ><Icon icon={faMapMarked}/></i> Ho Chi Minh City, Viet Nam{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
