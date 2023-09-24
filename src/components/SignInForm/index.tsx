import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import SignInInput from "@/components/SignInInput";
import styles from "./styles.module.scss";
import SignInCheckbox from "../SignInCheckbox";
import { useNavigate } from "react-router-dom";

const Schema = z.object({
  login: z.string().min(1, { message: "Обязательное поле" }),
  password: z.string().min(1, { message: "Обязательное поле" }),
  rememberMe: z.boolean().optional(),
});

type SignInFormData = z.infer<typeof Schema>;

export type { SignInFormData };

export default function SignInForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<SignInFormData>({
    resolver: zodResolver(Schema),
    defaultValues: {
      rememberMe: true,
    },
  });

  const onSubmit: SubmitHandler<SignInFormData> = (data) => {
    console.log("Sign in data", JSON.stringify(data));
    navigate("/dashboard");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={styles.formTitle}>Вход</h2>
      <div className={styles.fields}>
        <SignInInput
          labelText="логин"
          type="text"
          label="login"
          register={register}
          errors={errors}
          setValue={setValue}
          watch={watch}
        />
        <SignInInput
          labelText="пароль"
          type="password"
          label="password"
          register={register}
          errors={errors}
          setValue={setValue}
          watch={watch}
        />
      </div>
      <SignInCheckbox
        labelText="Запомнить меня"
        label="rememberMe"
        register={register}
        errors={errors}
      />
      <button className={styles.submit} type="submit">
        Войти
      </button>
      <button className={styles.rememberBtn}>Забыли пароль?</button>
    </form>
  );
}
