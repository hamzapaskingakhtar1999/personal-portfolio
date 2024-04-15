import React from "react";

import styles from "./header.module.css";

import hpa from "../../assets/images/hpa.png";

const item = [
  { link: "#root", title: "Home" },
  { link: "#about", title: "About Me" },
  { link: "#education", title: "Education" },
  { link: "#experience", title: "Experience" },
  { link: "#certificates", title: "Certificates" },
  { link: "#projects", title: "Projects" },
  { link: "#connect", title: "Connect" },
];

const Header = () => {
  return (
    <div className={styles.header}>
      <img src={hpa} style={{ height: "80px", width: "80px" }} />
      <div className={styles.navbarItems}>
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
