import React from "react";
import styles from "../scss/sliding-banner.module.scss";
import { Slide } from "react-slideshow-image";
import image1 from "../images/Profile_Pic_New.jpg";
import image2 from "../images/IMG_20171214_220105 (1).jpg";
import image3 from "../images/IMG-20150903-WA0007.jpg";

const slideImages = [image1, image2, image3];
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  className: `${styles["slider-class"]}`,
  autoplay: false,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
};

const SlideShow = () => {
  return (
    <div
      className={styles["slide-container"]}
      style={{ backgroundImage: `url(${slideImages[0]})` }}
    >
      <Slide {...properties}>
        <div className={styles["each-slide"]}>
          <span>Slide 1</span>
        </div>
        <div className={styles["each-slide"]}>
          <span>Slide 2</span>
        </div>
        <div className={styles["each-slide"]}>
          <span>Slide 3</span>
        </div>
      </Slide>
    </div>
  );
};

export default SlideShow;
