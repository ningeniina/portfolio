"use client";
import Headline from "@/app/_component/element/HeadLine";
import styles from "@/app/_component/contact/contact.module.css";

export default function Home() {
  return (
    <section className={styles.contact}>
      <div className={styles.contactPage}>
        <Headline text="Complete" subText="お問い合わせ完了" />
        <p>
          お問い合わせ完了しました！
          <br />
          入力いただいたメールアドレス宛に確認メールが自動送信されています。
        </p>
      </div>
    </section>
  );
}
