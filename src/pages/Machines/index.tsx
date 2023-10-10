import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

const machinesLeft = [
  {
    id: 1,
    title: "DMU-50, УФ-152",
    src: "/images/machines/1.svg",
    href: "/dashboard/machine",
  },
  {
    id: 2,
    title: "DMU-50, УФ-153",
    src: "/images/machines/2.svg",
    href: "/dashboard/machine",
  },
  {
    id: 3,
    title: "SMV-450, CФ-57",
    src: "/images/machines/3.svg",
    href: "/dashboard/machine",
  },
  {
    id: 4,
    title: "DMC-835V, ВФ-42",
    src: "/images/machines/4.svg",
    href: "/dashboard/machine",
  },
  {
    id: 5,
    title: "DMU-65, СФ-60",
    src: "/images/machines/5.svg",
    href: "/dashboard/machine",
  },
];
const machinesRight = [
  {
    id: 1,
    title: "DMU-50, УФ-150",
    src: "/images/machines/6.svg",
    href: "/dashboard/machine",
  },
  {
    id: 2,
    title: "Reiden RX-10, УФ-151",
    src: "/images/machines/7.svg",
    href: "/dashboard/machine",
  },
];

export default function Machines() {
  return (
    <div className={styles.machines}>
      <div className={styles.department}>Цех №3</div>
      <h2 className={styles.heading}>Участок фрезерных ОЦ</h2>
      <div className={styles.map}>
        <img src="/images/machine-map.svg" alt="" className={styles.image} />
        <div className={styles.content}>
          <ul className={styles.leftList}>
            {machinesLeft.map((item) => (
              <li className={styles.leftListItem} key={item.id}>
                <Link className={styles.card} to={item.href}>
                  <img src={item.src} alt="" className={styles.cardImage} />
                  <div className={styles.cardTitle}>{item.title}</div>
                </Link>
              </li>
            ))}
          </ul>
          <ul className={styles.rightList}>
            {machinesRight.map((item) => (
              <li className={styles.rightListItem} key={item.id}>
                <Link className={styles.card} to={item.href}>
                  <img src={item.src} alt="" className={styles.cardImage} />
                  <div className={styles.cardTitle}>{item.title}</div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
