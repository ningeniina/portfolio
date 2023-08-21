"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./header.module.css";

const Menu = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    //スクロール条件付与,開閉状態変更
    if (!menuIsOpen) {
      document.body.style.overflowY = "hidden";
      setMenuIsOpen(true);
    } else {
      document.body.style.overflowY = "auto";
      setMenuIsOpen(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuIsOpen(false);
        document.body.style.overflowY = "auto";
      } else {
      }
    };
    document.body.style.overflow = "auto";
    setMenuIsOpen(false); //ページ遷移を行う度にメニューを閉じる

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [pathname]);

  return (
    <div>
      <ul className={`${styles.menuList} ${menuIsOpen ? styles.menuOpen : ""}`}>
        {/*<li className={styles.menuListButton}>
          <Link href="/">Profile</Link>
  </li>*/}
        <li className={styles.menuListButton}>
          <Link href="/">Blog</Link>
        </li>
        <li className={styles.menuListButton}>
          <Link href="/contact/">Contact</Link>
        </li>
      </ul>
      <button
        onClick={toggleMenu}
        aria-label="メニュー画面開閉ボタン"
        className={styles.menuButton}
      >
        <div className={`${styles.hamburger} ${menuIsOpen ? styles.open : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
    </div>
  );
};

export default Menu;
