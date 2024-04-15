import React from "react";

import styles from "./certificatesItem.module.css";

import IconText from "../../components/iconText/IconText";

import certifcate from "../../assets/svg/Certificate/certificate.svg";
import { FaRegEye } from "react-icons/fa";

const certificatesItem = ({ item }) => {
  return (
    <div className={styles.container}>
      {/* TOP : From where and Logo */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <IconText icon={item.fromIcon} title={item.from} />
        <img src={certifcate} style={{ height: "90px", width: "100px" }} />
      </div>
      {/* Middle Title */}
      <h2 style={{ color: "black" }}>{item.certificateName}</h2>
      {/* View Button */}
      <a href={item.certicateLink} style={{all:"unset"}}>
        <button className={styles.viewLink}>
          <FaRegEye size={22} />
          <h3>View</h3>
        </button>
      </a>
    </div>
  );
};

export default certificatesItem;
