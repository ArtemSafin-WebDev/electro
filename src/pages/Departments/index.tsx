import styles from "./styles.module.scss";
import DepartmentCard from "@/components/DepartmentCard";

export default function Departments() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <h1 className={styles.heading}>Техническое обслуживание и ремонт</h1>
        <ul className={styles.list}>
          <li className={styles.listItem} key={1}>
            <DepartmentCard
              title="Цех №3"
              code="7728937482"
              imageSrc="/images/departments/1.webp"
              href="/dashboard/departments/3"
            />
          </li>
          <li className={styles.listItem} key={1}>
            <DepartmentCard
              title="ИОП"
              code="3929479249"
              imageSrc="/images/departments/2.webp"
              href="/dashboard/departments/3"
            />
          </li>
          <li className={styles.listItem} key={1}>
            <DepartmentCard
              title="Цех №30"
              code="2397274729"
              imageSrc="/images/departments/3.webp"
              href="/dashboard/departments/3"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
