import { useState } from "react";
import { motion } from "framer-motion";

import styles from "./styles.module.scss";
import User from "@/components/User";
import SidebarNav from "../SidebarNav";

type Modes = "KZO" | "TOIR";

export default function Sidebar() {
  const [mode, setMode] = useState<Modes>("TOIR");
  return (
    <div className={styles.sidebar}>
      <img src="/images/logo-orange.svg" className={styles.logo} />
      <div className={styles.switch}>
        <button
          className={`${styles.switchBtn} ${
            mode === "KZO" ? styles.active : ""
          }`}
          onClick={() => setMode("KZO")}
          key="KZO"
        >
          {mode === "KZO" ? (
            <motion.span
              className={styles.indicator}
              layoutId="indicator"
            ></motion.span>
          ) : null}
          КЗО
        </button>
        <button
          className={`${styles.switchBtn} ${
            mode === "TOIR" ? styles.active : ""
          }`}
          onClick={() => setMode("TOIR")}
          key="TOIR"
        >
          {mode === "TOIR" ? (
            <motion.span
              className={styles.indicator}
              layoutId="indicator"
            ></motion.span>
          ) : null}
          ТОиР
        </button>
      </div>
      <SidebarNav />
      <User />
    </div>
  );
}
