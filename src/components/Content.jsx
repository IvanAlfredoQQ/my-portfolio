import React from 'react'
import styles from './Home.module.css';

export default function Content() {
  return (
    <div className={styles.InformationContainer}>
              <div className={styles.About}>
                <h1 className={styles.h1}>Helo! I'm Ivan</h1>
                <h2 className={styles.h2}>Fullstack web developer</h2>
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
  )
}
