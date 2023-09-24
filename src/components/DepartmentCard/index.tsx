import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

type DepartmentCardProps = {
  href: string;
  imageSrc: string;
  title: string;
  code: string;
};

export default function DepartmentCard({
  href,
  imageSrc,
  title,
  code,
}: DepartmentCardProps) {
  return (
    <Link className={styles.card} to={href}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} alt="" src={imageSrc} />
      </div>
      <div className={styles.content}>
        <div className={styles.code}>{code}</div>
        <div className={styles.title}>{title}</div>
      </div>
    </Link>
  );
}
