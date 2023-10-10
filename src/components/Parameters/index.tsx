import styles from "./styles.module.scss";
import { Outlet } from "react-router-dom";

import { NavLink } from "react-router-dom";

import MnemoschemeIcon from "@/assets/icons/mnemoscheme.svg?react";
import PrognosisIcon from "@/assets/icons/prognosis.svg?react";

export default function Parameters() {
  return (
    <div className={styles.parameters}>
      <div className={styles.parametersNav}>
        <NavLink to="." relative="path" className={styles.parametersNavLink}>
          <MnemoschemeIcon />
          Мнемосхема
        </NavLink>
        <NavLink
          to="./prognosis"
          relative="path"
          className={styles.parametersNavLink}
        >
          <PrognosisIcon />
          Прогноз состояния
        </NavLink>
      </div>
      <div className={styles.parametersWrapper}>
        <Outlet />
      </div>
    </div>
  );
}
