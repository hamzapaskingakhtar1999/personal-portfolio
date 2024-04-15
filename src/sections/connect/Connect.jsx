import React, { useRef, useState } from "react";

import styles from "./connect.module.css";

import { RxAvatar } from "react-icons/rx";
import { MdOutlineEmail } from "react-icons/md";
import { CiMobile3 } from "react-icons/ci";
import { CiText } from "react-icons/ci";
import { MdDoubleArrow } from "react-icons/md";

import emailjs from "@emailjs/browser";

import man from "../../assets/images/resume/man.png";

const Connect = () => {
  const [submit, setSubmit] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_7uzaeun", "template_6uyr5lu", form.current, {
        publicKey: "Cqyfe0mPUELFEc3lq",
      })
      .then(
        () => {
          setSubmit(true);
          setName("");
          setEmail("");
          setMobile("");
          setSubject("");
          setMessage("");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className={styles.connect} id="connect">
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
      <form className={styles.connectForm} ref={form} onSubmit={sendEmail}>
        {/* 1st Row */}
        <div className={styles.columns}>
          <div className={styles.columnItem}>
            <RxAvatar size={31} color="rgb(57, 57, 57)" />
            <input
              type="text"
              placeholder="Full Name"
              name="user_name"
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className={styles.columnItem}>
            <MdOutlineEmail size={31} color="rgb(57, 57, 57)" />
            <input
              type="email"
              placeholder="Email"
              name="user_email"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
        </div>

        {/* 2nd Row */}
        <div className={styles.columns}>
          <div className={styles.columnItem}>
            <CiMobile3 size={31} color="rgb(57, 57, 57)" />
            <input
              type="text"
              placeholder="Mobile Number"
              name="number"
              onChange={(e) => setMobile(e.target.value)}
              value={mobile}
            />
          </div>
          <div className={styles.columnItem}>
            <CiText size={31} color="rgb(57, 57, 57)" />
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              required
              onChange={(e) => setSubject(e.target.value)}
              value={subject}
            />
          </div>
        </div>
        <textarea
          rows={5}
          placeholder="Message"
          name="message"
          required
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
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
      {submit && <p style={{ color: "black" }}>Message Successfully Sent!!</p>}
    </div>
  );
};

export default Connect;
