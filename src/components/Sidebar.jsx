import React from "react";
import styles from "../scss/sidebar.scss";
function Sidebar() {
  return (
    <div className={styles["sidebar-parent"]}>
      <div className={styles["author-info-parent"]}>
        <div
          className={styles["author-img"]}
          style={{ backgroundImage: "url(images/Profile_Pic_New.jpg)" }}
        ></div>
        <div className={styles["author-name"]}>Tanmay Shah</div>
        <div className={styles["author-email"]}>tanmayshahee@gmail.com</div>
      </div>
    </div>
  );
}

export default Sidebar;
