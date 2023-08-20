import Link from "next/link";
import Menu from "./Menu";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerMenu}>
        <Link className={styles.headerIcon} href="/">
          <svg
            width="32"
            height="32"
            viewBox="0 0 259 259"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 51.8C0 23.1916 23.1917 0 51.8 0H207.2C235.808 0 259 23.1917 259 51.8V207.2C259 235.808 235.808 259 207.2 259H51.8C23.1916 259 0 235.808 0 207.2V51.8Z"
              fill="#FFD803"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M79.2784 132.962C67.7843 137.962 57.0661 147.388 50.7923 154.594C47.9809 157.823 43.031 157.779 39.7365 154.496C36.442 151.213 36.0503 145.934 38.8618 142.705C46.0157 134.489 58.3277 123.517 72.2841 117.445C86.1728 111.403 103.856 109.462 118.919 123.725C122.291 126.918 122.819 132.196 120.101 135.515C117.382 138.834 112.445 138.936 109.073 135.744C101.028 128.126 90.8402 127.932 79.2784 132.962Z"
              fill="#272343"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M181.935 112.434C170.441 117.434 159.723 126.86 153.449 134.066C150.638 137.295 145.688 137.251 142.393 133.968C139.099 130.685 138.707 125.406 141.518 122.177C148.672 113.961 160.984 102.989 174.941 96.9168C188.829 90.8746 206.512 88.9342 221.576 103.197C224.947 106.39 225.476 111.668 222.757 114.987C220.038 118.306 215.101 118.408 211.73 115.216C203.684 107.598 193.497 107.404 181.935 112.434Z"
              fill="#272343"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M161.443 148.817C164.633 151.949 164.681 157.073 161.549 160.263C153.994 167.961 143.922 170.57 135.372 171.108C126.778 171.648 118.639 170.181 113.531 168.584C109.265 167.251 106.887 162.711 108.221 158.445C109.555 154.178 114.095 151.801 118.361 153.134C121.844 154.223 127.996 155.352 134.356 154.952C140.76 154.55 146.307 152.684 149.997 148.924C153.128 145.734 158.252 145.686 161.443 148.817Z"
              fill="#272343"
            />
          </svg>
          ningeniina
        </Link>
        <Menu />
      </div>
    </header>
  );
}
