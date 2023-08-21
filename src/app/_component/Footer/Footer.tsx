import Link from "next/link";
import style from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={style.footer}>
      {/*<div className={style.footerLink}>
        <Link href="/">プライバシーポリシー</Link>
  </div>*/}
      <small className={style.copyright}>&copy; 2023 ningeniina</small>
    </footer>
  );
}
