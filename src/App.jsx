import { Outlet } from "react-router-dom";
import styles from "./components/Home.module.css";

function App() {
  return (
      <div className={styles.MainContainer}>
        <div className={styles.FrameContainer}>
          <div className={styles.InnerContainer}>
           <Outlet/>
          </div>
        </div>
      </div>
  );
}

export default App;
