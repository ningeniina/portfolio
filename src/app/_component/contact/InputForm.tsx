"use client";
import { useForm } from "react-hook-form";
import Headline from "@/app/_component/element/HeadLine";
import styles from "@/app/_component/contact/contact.module.css";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const InputForm: React.FC<{
  formData: FormData;
  onFormSubmit: (data: FormData) => void;
}> = ({ formData, onFormSubmit }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>();

  const handleFormSubmit = (data: FormData) => {
    onFormSubmit(data);
  };

  return (
    <>
      <Headline text="Contact" subText="お問い合わせフォーム" />
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className={styles.inputForm}
        noValidate
      >
        <div className={styles.formContents}>
          <label className={styles.label} htmlFor="firstName">
            名前
            {errors.name && (
              <span className={styles.errorText}>{errors.name.message}</span>
            )}
          </label>
          <input
            className={styles.inputStyle}
            type="text"
            placeholder=""
            defaultValue={formData.name}
            {...register("name", { required: "※入力必須項目です。" })}
          />
        </div>
        <div className={styles.formContents}>
          <label className={styles.label} htmlFor="email">
            メール
            {errors.email && (
              <span className={styles.errorText}>{errors.email.message}</span>
            )}
          </label>
          <input
            className={styles.inputStyle}
            type="email"
            placeholder=""
            defaultValue={formData.email}
            {...register("email", {
              required: "※入力必須項目です。",
              pattern: {
                value:
                  /^[a-zA-Z0-9_+-]+(\.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/,
                message: "※メールアドレスの形式を確認してください。",
              },
            })}
          />
        </div>
        <div className={styles.formContents}>
          <label className={styles.label} htmlFor="message">
            詳細
            {errors.message && (
              <span className={styles.errorText}>{errors.message.message}</span>
            )}
          </label>
          <textarea
            className={`${styles.inputStyle} ${styles.message}`}
            placeholder=""
            defaultValue={formData.message}
            {...register("message", { required: "※入力必須項目です。" })}
          />
        </div>
        <button type="submit" className={styles.buttonBase}>
          確認する
        </button>
      </form>
    </>
  );
};

export default InputForm;
