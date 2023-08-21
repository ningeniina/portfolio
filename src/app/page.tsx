import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <section className={`${styles.firstView} ${styles.topSection}`}>
        <div className={styles.firstViewTitle}>
          <h1>Portfolio Site</h1>
        </div>
      </section>
      <section className={`${styles.topSection} ${styles.secondAbout}`}>
        <div className={styles.secondAboutItem}>
          <h2>当サイトの制作について</h2>
          <div className={styles.about}>
            <div
              className={`${styles.aboutColumn} ${styles.doubleColumn} ${styles.aboutText}`}
            >
              <h3>開発環境</h3>
              <p className={styles.topText}>
                Windows10(WSL2) / Visual Studio Code
              </p>
            </div>
            <div
              className={`${styles.aboutColumn} ${styles.doubleColumn} ${styles.aboutText}`}
            >
              <h3>外部ツール</h3>
              <p className={styles.topText}>Figma / Github(Git) / SendGrid</p>
            </div>
            <div className={`${styles.aboutColumn} ${styles.aboutTechnology}`}>
              <div className={styles.aboutText}>
                <h3>使用技術</h3>
                <p className={styles.topText}>
                  Next.js(13.4.19) / React / TypeScript / CSS Modules
                </p>
              </div>
              <div className={styles.aboutText}>
                <h3>React</h3>
                <p className={styles.topText}>
                  useState / useEffect / React Hook Form
                </p>
              </div>
              <div className={styles.aboutText}>
                <h3>Next</h3>
                <p className={styles.topText}>
                  usePathname,useRouter(next/navigation) / Link(next/link)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
