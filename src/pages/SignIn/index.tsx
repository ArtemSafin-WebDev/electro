import SignInForm from "@/components/SignInForm";
import styles from "./styles.module.scss";

export default function SignIn() {
  return (
    <div className={styles.signIn}>
      <div className={styles.layout}>
        <div className={styles.leftCol}>
          <img
            src="/images/intro.webp"
            alt="Изображение на экране входа"
            className={styles.bgImage}
          />
          <div className={styles.leftRow}>
            <img src="/images/logo.svg" alt="Лого" className={styles.logo} />
            <div className={styles.smallText}>
              АПК контроля экспулатации
              <br /> оборудования
            </div>
          </div>
        </div>
        <div className={styles.rightCol}>
          <SignInForm />
        </div>
      </div>
    </div>
  );
}
