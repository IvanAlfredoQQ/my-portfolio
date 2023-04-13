import React from "react";
import styles from './Home.module.css';
export default function Header() {
  return (
    <div className={styles.Header}>
      <img src="./img/gmail.svg" alt="GmailLogo" height="50px" />
      <img src="./img/github.svg" alt="GithubLogo" height="50px" />
      <img src="./img/linkedin.svg" alt="LinkedinLogo" height="50px" />
    </div>
  );
}
