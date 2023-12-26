import React from "react";
import styles from './Home.module.css';
export default function Header(props) {
  const { mainColors = {} } = props;
  const {mainColor,secondaryColor} = mainColors;
  let myStyle = {filter:''};
  
  return (
    <div className={styles.Header}>
      <img id="gmailimg" src="./img/gmail.svg" alt="GmailLogo" className={styles.Logo}/>
      <img id="githubimg" src="./img/github.svg" alt="GithubLogo" className={styles.Logo} />
      <img id="linkedinimg" src="./img/linkedin.svg" alt="LinkedinLogo" className={styles.Logo} />
  </div>
  );
}
