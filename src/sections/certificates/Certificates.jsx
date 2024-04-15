import React from "react";

import styles from "./certificates.module.css";

import calendar from "../../assets/svg/Education/calendar.svg";

import CertificatesItem from "../../components/certificatesItem/certificatesItem";

const certifcateList = [
  {
    from: "freeCodeCamp",
    fromIcon: calendar,
    certificateName: "JavaScript Algorithms and Data Structures",
    certicateLink:
      "https://freecodecamp.org/certification/hamzapaskingakhtar/javascript-algorithms-and-data-structures",
    gradient: true,
  },
  {
    from: "Coursera",
    fromIcon: calendar,
    certificateName: "Version Control",
    certicateLink:
      "https://www.coursera.org/account/accomplishments/certificate/WT9TYMR2X6X8",
    gradient: false,
  },
  {
    from: "Coursera",
    fromIcon: calendar,
    certificateName: "Programming with JavaScript",
    certicateLink:
      "https://www.coursera.org/account/accomplishments/certificate/ABC6X65ZJQMJ",
    gradient: true,
  },
  {
    from: "Coursera",
    fromIcon: calendar,
    certificateName: "Introduction to Frontend Development",
    certicateLink:
      "https://www.coursera.org/account/accomplishments/certificate/S3FQ5SK9FTJ9",
    gradient: false,
  },
];

const Certificates = () => {
  return (
    <div className={styles.certificates} id="certificates">
      <h1 className="yellow main-heading">Certificates</h1>
      <div className={styles.certificateItems}>
        {certifcateList.map((item) => (
          <CertificatesItem item={item} />
        ))}
      </div>
    </div>
  );
};

export default Certificates;
