import Link from "next/link";
import styles from "./default.module.css";

interface Props {
  text: string;
  href: string;
}

export default function Button(props: Props) {
  return (
    <Link className={styles.button} href={props.href}>
      {props.text}
    </Link>
  );
}
