import Navbar from "../UI/Navbar";
import styles from "./Custom.module.css";
import { Outlet } from "react-router-dom";
const Custom = () => {
  return (
    <div className={styles.customContainer}>
      <Navbar />
      <Outlet />
    </div>
  );
};
export default Custom;
