"use client";
import Headline from "@/app/_component/element/HeadLine";
import styles from "@/app/_component/contact/contact.module.css";

export default function Home() {
  return (
    <section className={styles.contact}>
      <div className={styles.contactPage}>
        <Headline text="Complete" subText="お問い合わせ完了" />
        <p>
          お問い合わせ内容の送信に失敗しました。
          <br />
          大変申し訳ございませんが、お問い合わせフォームよりもう一度お送りください。
        </p>
      </div>
    </section>
  );
}
