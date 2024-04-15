import React, { useState } from "react";

import styles from "./header.module.css";

import hpa from "../../assets/images/hpa.png";

import { IoIosCloseCircleOutline } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

const item = [
  /*   { link: "#root", title: "Home" }, */
  { link: "#about", title: "About Me" },
  { link: "#education", title: "Education" },
  { link: "#experience", title: "Experience" },
  { link: "#certificates", title: "Certificates" },
  { link: "#projects", title: "Projects" },
  { link: "#connect", title: "Connect" },
];

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className={styles.header}>
      <a href="#root" style={{ all: "unset" }}>
        <img
          src={hpa}
          style={{ height: "80px", width: "85px", marginLeft: "5px" }}
        />
      </a>
      <button
        onClick={() => setToggle(!toggle)}
        style={{
          all: "unset",
          position: "absolute",
          right: "20px",
          cursor: "pointer",
        }}
      >
        {/* <span className={`${styles.line3}`}></span>
        {!toggle && <span className={styles.line2}></span>}
        <span className={`${styles.line3}`}></span> */}
        {toggle?<IoIosCloseCircleOutline size={45} color="black" />: <RxHamburgerMenu size={40} color="black"/>}
      </button>
      <div className={`${styles.navbarItems} ${toggle ? styles.show : ""}`}>
        {item.map((x) => (
          <a href={x.link} style={{ all: "unset" }}>
            <h3 className={styles.navbarItem}>{x.title}</h3>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Header;
