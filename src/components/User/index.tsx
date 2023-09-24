import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import LinkIcon from "@/assets/icons/link.svg?react";

export default function User() {
  return (
    <Link className={styles.user} type="button" to="/">
      <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          alt="Фото пользователя"
          src="/images/user.webp"
        />
      </div>
      <div className={styles.info}>
        <div className={styles.name}>Иван Иванов</div>
        <div className={styles.role}>Супервайзер</div>
      </div>
      <LinkIcon className={styles.icon} />
    </Link>
  );
}
