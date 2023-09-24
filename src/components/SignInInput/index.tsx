import { MouseEvent, useId, useState } from "react";
import {
  FieldErrors,
  Path,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import styles from "./styles.module.scss";
import EyeIcon from "@/assets/icons/eye.svg?react";
import CrossIcon from "@/assets/icons/cross.svg?react";
import { SignInFormData } from "../SignInForm";

type TextInputProps = {
  type?: "tel" | "text" | "email" | "password";
  labelText?: string;
  disabled?: boolean;
  label: Path<SignInFormData>;
  register: UseFormRegister<SignInFormData>;
  errors: FieldErrors<SignInFormData>;
  setValue: UseFormSetValue<SignInFormData>;
  watch: UseFormWatch<SignInFormData>;
};

export default function SignInInput({
  type = "text",
  labelText,
  disabled,
  label,
  register,
  errors,
  setValue,
  watch,
}: TextInputProps) {
  const id = useId();
  const [showPassword, setShowPassword] = useState(false);
  const inputType = type === "password" && showPassword ? "text" : type;
  const watchedValue = watch(label, "") as string;

  const togglePasswordVisibility = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setShowPassword((prev) => !prev);
  };
  const clearInput = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setValue(label, "");
  };

  return (
    <div className={styles.textInput}>
      {labelText ? (
        <label htmlFor={id} className={styles.label}>
          {labelText}
        </label>
      ) : null}
      <div className={styles.inputWrapper}>
        <input
          id={id}
          className={`${styles.input} ${errors[label] ? styles.hasError : ""}`}
          type={inputType}
          disabled={disabled}
          {...register(label)}
        />
        {watchedValue?.length > 0 && type === "password" ? (
          <button
            className={styles.showPassword}
            onClick={togglePasswordVisibility}
            type="button"
          >
            <EyeIcon />
          </button>
        ) : null}
        {watchedValue?.length && type !== "password" ? (
          <button
            className={styles.clearInput}
            type="button"
            onClick={clearInput}
          >
            <CrossIcon />
          </button>
        ) : null}
      </div>
      {errors[label]?.message ? (
        <div className={styles.validationError}>{errors[label]?.message}</div>
      ) : null}
    </div>
  );
}
