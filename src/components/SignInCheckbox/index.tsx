import Checkmark from "@/assets/icons/checkmark.svg?react";
import { FieldErrors, Path, UseFormRegister } from "react-hook-form";
import { SignInFormData } from "../SignInForm";
import styles from "./styles.module.scss";

type SigiInCheckboxProps = {
  labelText: string;
  label: Path<SignInFormData>;
  register: UseFormRegister<SignInFormData>;
  errors: FieldErrors<SignInFormData>;
};

export default function SignInCheckbox({
  labelText,
  label,
  register,
  errors,
}: SigiInCheckboxProps) {
  return (
    <div className={styles.wrapper}>
      <label className={styles.checkbox}>
        <input type="checkbox" {...register(label)} className={styles.input} />
        <span className={styles.mark}>
          <Checkmark />
        </span>
        <span className={styles.text}>{labelText}</span>
      </label>
      {errors[label]?.message ? (
        <div className={styles.validationError}>{errors[label]?.message}</div>
      ) : null}
    </div>
  );
}
