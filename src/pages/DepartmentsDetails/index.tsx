import { useParams } from "react-router-dom";
import styles from "./styles.module.scss";
import DepartmentCard from "@/components/DepartmentCard";

export default function DepartmentsDetails() {
  const { id } = useParams();
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.headingText}>
          Техническое обслуживание и ремонт
        </div>
        <h1 className={styles.heading}>Цех №{id}</h1>
        <ul className={styles.list}>
          <li className={styles.listItem} key={5}>
            <DepartmentCard
              title="Участок фрезерных ОЦ"
              code="7728937482"
              imageSrc="/images/departments/5.webp"
              href="/"
            />
          </li>
          <li className={styles.listItem} key={6}>
            <DepartmentCard
              title="Участок токарных автоматов"
              code="3929479249"
              imageSrc="/images/departments/6.webp"
              href="/"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
