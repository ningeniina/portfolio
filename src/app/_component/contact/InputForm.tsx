"use client";
import { useForm } from "react-hook-form";

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
      <h1>入力フォーム</h1>
      <form onSubmit={handleSubmit(handleFormSubmit)} noValidate>
        <div>
          <label htmlFor="firstName">
            名前:
            {errors.name && (
              <span style={{ color: "red" }}>{errors.name.message}</span>
            )}
          </label>
          <input
            type="text"
            placeholder=""
            defaultValue={formData.name}
            {...register("name", { required: "入力必須項目です。" })}
          />
        </div>
        <div>
          <label htmlFor="email">
            メール:
            {errors.email && (
              <span style={{ color: "red" }}>{errors.email.message}</span>
            )}
          </label>
          <input
            type="email"
            placeholder=""
            defaultValue={formData.email}
            {...register("email", {
              required: "入力必須項目です。",
              pattern: {
                value:
                  /^[a-zA-Z0-9_+-]+(\.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/,
                message: "メールアドレスの形式を確認してください。",
              },
            })}
          />
        </div>
        <div>
          <label htmlFor="message">
            詳細:
            {errors.message && (
              <span style={{ color: "red" }}>{errors.message.message}</span>
            )}
          </label>
          <textarea
            placeholder=""
            defaultValue={formData.message}
            {...register("message", { required: "入力必須項目です。" })}
          />
        </div>
        <button type="submit">確認する</button>
      </form>
    </>
  );
};

export default InputForm;
