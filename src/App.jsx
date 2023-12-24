import { Outlet } from "react-router-dom";
import styles from "./components/Home.module.css";
import { useEffect, useState } from "react";

function App() {
  const [mainColors, setMainColors] = useState({
    mainColor: "#00FF75",
    secondaryColor: "#3700FF"
  })

  useEffect(() => {
    const optionalColors = {mainColor:'#CDA86C', secondaryColor:'#CD6C88'};
    const randomInteger = Math.floor(Math.random() * 4);
    console.log("random", randomInteger)
    if(randomInteger > 2){
      setMainColors(optionalColors);
    }
  },[])
  
  const containerColorStyle = {
    backgroundImage: `linear-gradient(163deg, ${mainColors.mainColor} 0%, ${mainColors.secondaryColor} 100%)`
  }
  return (
      <div className={styles.MainContainer}>
        <div className={styles.FrameContainer} style={containerColorStyle}>
          <div className={styles.InnerContainer}>
           <Outlet/>
          </div>
        </div>
      </div>
  );
}

export default App;
