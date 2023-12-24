import React from "react";
import styles from './Home.module.css';
export default function Header() {
  return (
    <div className={styles.Header}>
      <img src="./img/gmail.svg" alt="GmailLogo" className={styles.Logo} />
      <img src="./img/github.svg" alt="GithubLogo" className={styles.Logo} />
      <img src="./img/linkedin.svg" alt="LinkedinLogo" className={styles.Logo} />
  </div>
  );
}
