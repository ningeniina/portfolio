"use client";
import { useRouter } from "next/navigation";
import Headline from "@/app/_component/element/HeadLine";
import styles from "@/app/_component/contact/contact.module.css";

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
      <Headline text="Confirm" subText="お問い合わせ内容確認" />
      <div className={styles.confirm}>
        <p className={styles.confirmItem}>
          名前 <span>{formData.name}</span>
        </p>
        <p className={styles.confirmItem}>
          メール<span> {formData.email}</span>
        </p>
        <p className={styles.confirmItem}>
          詳細 <span>{formData.message}</span>
        </p>
      </div>
      <div className={styles.sendButton}>
        <button onClick={registerUser} className={styles.buttonBase}>
          送信する
        </button>
        <button
          onClick={onBack}
          className={`${styles.send} ${styles.buttonBase}`}
        >
          修正する
        </button>
      </div>
    </>
  );
};

export default ConfirmPage;
