import React from 'react'
import styles from './Home.module.css';

export default function Content() {
  const mainContent = {
    width: "200%",
  }
  return (
    <div className={styles.InformationContainer}>
              <div className={styles.About} style={mainContent}>
                <h1>Hello! I'm Ivan</h1>
                <h2>Fullstack web developer</h2>
                <p>
                  As a Fullstack web-developer, I possess knowledge in various
                  technologies such as HTML, CSS, JavaScript, Node.js, React,
                  Redux, Express, Sequelize, PostgreSQL. Additionally, I exhibit
                  strong interpersonal skills, including empathy and positivity,
                  and thrive in an autonomous work environment that enables me to
                  expand my knowledge base. My enthusiasm for learning new
                  technologies and approaches is extraordinary. Please feel free
                  to reach out to me to learn more about my experience and
                  projects. I look forward to connecting with you!
                </p>
              </div>
            <div className={styles.About}>
              <p>Aca iria otro tipo de contenido o una grilla con mis proyectos y
              tecnologias</p>
            </div>
      </div>
  )
}
