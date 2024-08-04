import React from "react";
import "./Footer.css";
import List from "./List/List";
import { FaFacebook, FaInstagram, FaTwitter, FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <footer className="footer-container">
        <div className="footer-comp">
          <h2 class="ftco-heading-2">ArchLab.</h2>
          <p>
            Far far away, behind the word mountains, far from the countries.
          </p>
          <ul className="ftco-footer-social list-unstyled mt-5">
            <li className="ftco-animate fadeInUp ftco-animated">
              <a href="#">
                <FaTwitter />
              </a>
            </li>
            <li className="ftco-animate fadeInUp ftco-animated">
              <a href="#">
                <FaFacebook />
              </a>
            </li>
            <li className="ftco-animate fadeInUp ftco-animated">
              <a href="#">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
        <List
          head="Community"
          list1="Projects"
          list2="Team"
          list3="Reviews"
          list4="FAQs"
        />
        <List
          head="About Us"
          list1="Our Story"
          list2="Meet the team"
          list3="Careers"
          list4="Info"
        />
        <List
          head="Company"
          list1="About Us"
          list2="Press"
          list3="Contact"
          list4="Careers"
        />
        <div className="footer-comp f-i">
          <h4>Have a Questions?</h4>
          <ul>
            <li>
              <span class="f-icon fa fa-map"></span>
              <span class="f-text">
                203 Fake St. Mountain View, San Francisco, California, USA
              </span>
            </li>
            <li>
              <a href="#">
                <span class="f-icon fa fa-phone"></span>
                <span class="f-text">+2 392 3929 210</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="f-icon fa fa-envelope pr-4"></span>
                <span class="f-text">info@yourdomain.com</span>
              </a>
            </li>
          </ul>
        </div>
      </footer>
      <div className="footer-bottom">
        <div className="f-b-container">
          <p>
            Copyright © 2024 All rights reserved | This template is made with{" "}
            <FaHeart
              className="dill"
              style={{ color: " #A7AEB4", fontSize: "16px" }}
            />
            by
            <a
              href="https://colorlib.com"
              target="_blank"
              rel="nofollow noopener"
            >
              Muiz
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
