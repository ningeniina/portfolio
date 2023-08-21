"use client";
import { useState } from "react";
import InputForm from "@/app/_component/contact/InputForm";
import ConfirmPage from "@/app/_component/contact/ConfirmPage";
import styles from "@/app/_component/contact/contact.module.css";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Home() {
  const [confirm, setConfirm] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleFormSubmit = (data: FormData) => {
    setFormData(data);
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
    setConfirm(true);
  };

  const handleBack = () => {
    setConfirm(false);
  };

  return (
    <section className={styles.contact}>
      <div className={styles.contactPage}>
        {confirm ? (
          <ConfirmPage formData={formData} onBack={handleBack} />
        ) : (
          <InputForm onFormSubmit={handleFormSubmit} formData={formData} />
        )}
      </div>
    </section>
  );
}
