import styles from "./styles.module.scss";
import Sidebar from "@/components/Sidebar";
import { Outlet } from "react-router-dom";

export default function SidebarLayout() {
  return (
    <div className={styles.row}>
      <div className={styles.leftCol}>
        <Sidebar />
      </div>
      <div className={styles.rightCol}>
        <Outlet />
      </div>
    </div>
  );
}
