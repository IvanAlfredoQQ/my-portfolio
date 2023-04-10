import styles from './App.module.css';
function App() {
  return (
    <>
      <div className={styles.MainContainer}>
        <div className={styles.FrameContainer}>
          <div className={styles.InnerContainer}>
            <div className={styles.Header}>
              <img src='./img/gmail.svg' alt='GmailLogo' height='50px'/>
              <img src='./img/github.svg' alt='GithubLogo' height='50px'/>
              <img src='./img/linkedin.svg' alt='LinkedinLogo' height='50px'/>
            </div>
            <div className={styles.InformationContainer}>
              <div className={styles.About}>
                <h1 className={styles.h1}>Helo! I'm Ivan</h1>
                <h1 className={styles.h1}>Fullstack web developer</h1>
                <p className={styles.p}>
                  As a Fullstack web-developer, I possess knowledge in various
                  technologies such as HTML, CSS, JavaScript, Node.js, React,
                  Redux, Express, Sequelize,PostgreSQL. Additionally, I exhibit
                  strong interpersonal skills, including empathy and positivity,
                  and thrive in an autonomous work environment that enables me to
                  expand my knowledge base. My enthusiasm for learning new
                  technologies and approaches is extraordinary. Please feel free
                  to reach out to me to learn more about my experience and
                  projects. I look forward to connecting with you!
                </p>
              </div>
            <div>
              Aca iria otro tipo de contenido o una grilla con mis proyectos y
              tecnologias
            </div>
            </div>
            <div className={styles.Footer}>Acá introduciría el pie de página mi firma y quizas algo más</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
