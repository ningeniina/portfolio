"use client";
import { useRouter } from "next/navigation";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ConfirmPage: React.FC<{
  formData: FormData;
  onBack: () => void;
}> = ({ formData, onBack }) => {
  const router = useRouter();
  const registerUser = async (event: any) => {
    event.preventDefault();

    const res = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (res.status === 200) {
      router.push("/contact/complete");
    } else {
      router.push("/contact/fail");
    }
  };

  return (
    <>
      <h1>確認ページ</h1>
      <p>名前: {formData.name}</p>
      <p>メール: {formData.email}</p>
      <p>詳細: {formData.message}</p>
      <div style={{ display: "flex", gap: "32px", flexFlow: "wrap" }}>
        <button onClick={registerUser}>送信する</button>
        <button onClick={onBack}>修正する</button>
      </div>
    </>
  );
};

export default ConfirmPage;
