import React from "react";

import styles from "./footer.module.css";

import { FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";

const Footer = () => {
  return (
    <div className={styles.footer}>
      {/* Where to find me */}
      <div className={styles.column}>
        <FaMapMarkerAlt color="white" size={34} />
        <h5 style={{ fontSize: 16, color: "#efae02" }}>WHERE TO FIND ME</h5>
        <p style={{ marginTop: "-15px" }}>Lucan, Ireland</p>
      </div>
      <div className={styles.column}>
        <MdOutlineEmail color="white" size={34} />
        <h5 style={{ fontSize: 16, color: "#efae02" }}>EMAIL ME AT</h5>
        <a
          href="mailto:hamzapaskingakhtar@gmail.com"
          style={{ textDecoration: "none", color: "white", marginTop: "-15px" }}
        >
          hamzapaskingakhtar@gmail.com
        </a>
      </div>
      <div className={styles.column}>
        <IoMdCall color="white" size={34} />
        <h5 style={{ fontSize: 16, color: "#efae02" }}>CALL ME AT</h5>
        <a
          href="tel:0831139570"
          style={{ textDecoration: "none", color: "white", marginTop: "-15px" }}
        >
          083 113 9570
        </a>
      </div>
    </div>
  );
};

export default Footer;
