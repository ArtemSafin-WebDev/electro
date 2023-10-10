import styles from "./styles.module.scss";

import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export default function TopPanel() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.panel}>
        <div className={styles.nameBlock}>
          <div className={styles.heading}>
            Мониторинг технического состояния
          </div>
          <div className={styles.machineTitle}>DMU-65 monoBLOCK</div>
        </div>
        <div className={styles.idBlock}>
          <div className={styles.infoCard}>
            <div className={styles.infoCardKey}>ID</div>
            <div className={styles.infoCardValue}>7728937482</div>
          </div>
        </div>
        <div className={styles.brandBlock}>
          <div className={styles.infoCard}>
            <div className={styles.infoCardKey}>Марка</div>
            <div className={styles.infoCardValue}>DMG</div>
          </div>
        </div>
        <div className={styles.numberBlock}>
          <div className={styles.infoCard}>
            <div className={styles.infoCardKey}>Инв. №</div>
            <div className={styles.infoCardValue}>УФ-150</div>
          </div>
        </div>
        <div className={styles.locationBlock}>
          <div className={styles.infoCard}>
            <div className={styles.infoCardKey}>Расположение</div>
            <div className={styles.infoCardValue}>
              Цех №3, участок фрезерных ОЦ
            </div>
          </div>
        </div>
        <div className={styles.typeBlock}>
          <div className={styles.infoCard}>
            <div className={styles.infoCardKey}>Тип станка</div>
            <div className={styles.infoCardValue}>
              Вертикальный фрезерный ОЦ
            </div>
          </div>
        </div>
      </div>
      <div className={styles.nav}>
        <Link to="/" className={styles.navLink}>
          Характеристики
        </Link>
        <Link to="/" className={`${styles.navLink} ${styles.navLinkActive}`}>
          Контролируемые параметры
        </Link>
        <Link to="/" className={styles.navLink}>
          Техническое обслуживание
        </Link>
        <Link to="/" className={styles.navLink}>
          Архив документов
        </Link>
      </div>
      <Outlet />
    </div>
  );
}
