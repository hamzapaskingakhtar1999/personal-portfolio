import React from "react";

import styles from "./connect.module.css";

import { RxAvatar } from "react-icons/rx";
import { MdOutlineEmail } from "react-icons/md";
import { CiMobile3 } from "react-icons/ci";
import { CiText } from "react-icons/ci";
import { MdDoubleArrow } from "react-icons/md";

import man from "../../assets/images/resume/man.png";

const Connect = () => {
  return (
    <div className={styles.connect}>
      <h1
        style={{
          color: "black",
          textAlign: "center",
          fontSize: 34,
          marginBottom: 30,
        }}
      >
        Contact Me
      </h1>
      <form className={styles.connectForm}>
        {/* 1st Row */}
        <div className={styles.columns}>
          <div className={styles.columnItem}>
            <RxAvatar size={31} color="rgb(57, 57, 57)" />
            <input type="text" placeholder="Full Name" />
          </div>
          <div className={styles.columnItem}>
            <MdOutlineEmail size={31} color="rgb(57, 57, 57)" />
            <input type="text" placeholder="Email" />
          </div>
        </div>

        {/* 2nd Row */}
        <div className={styles.columns}>
          <div className={styles.columnItem}>
            <CiMobile3 size={31} color="rgb(57, 57, 57)" />
            <input type="text" placeholder="Mobile Number" />
          </div>
          <div className={styles.columnItem}>
            <CiText size={31} color="rgb(57, 57, 57)" />
            <input type="text" placeholder="Subject" />
          </div>
        </div>
        <textarea rows={5} placeholder="Message" />
        <button className="yellowButton">
          Send <MdDoubleArrow />
        </button>
        <img
          src={man}
          style={{
            height: "250px",
            width: "250px",
            position: "absolute",
            bottom: "-80px",
            right: 0,
          }}
          className="hideOnSmallDevice"
        />
      </form>
    </div>
  );
};

export default Connect;
