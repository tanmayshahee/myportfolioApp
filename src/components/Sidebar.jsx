import React from "react";
import styles from "../scss/sidebar.module.scss";
import profilePic from "../images/Profile_Pic_New.jpg";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub
} from "react-icons/fa";
function Sidebar() {
  return (
    <div className={styles["sidebar-parent"]}>
      <div className={styles["author-info-parent"]}>
        <div className={styles["author-img"]}>
          <img className={styles["image"]} src={profilePic}></img>
        </div>
        <div className={styles["author-name"]}>Tanmay Shah</div>
        <div className={styles["author-email"]}>tanmayshahee@gmail.com</div>
      </div>

      <nav
        id="colorlib-main-menu"
        role="navigation"
        className={styles["navigation-parent"]}
      >
        <div id="navbar" className={styles["navigation"]}>
          <ul>
            <li className={styles["active"]}>
              <a href="#home" data-nav-section="home">
                Introduction
              </a>
            </li>
            <li>
              <a href="#about" data-nav-section="about">
                About
              </a>
            </li>
            <li>
              <a href="#timeline" data-nav-section="timeline">
                Timeline
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <nav id="colorlib-main-menu" className={styles["social-media"]}>
        <ul>
          <li>
            <a
              href="https://www.facebook.com/tanmaytheshocker"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/tanmaytheshocker"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/tanmayshah1992"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/tanmay-shah-1b4bb498/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/tanmayshahee"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
