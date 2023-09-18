import Link from "next/link";
import styles from "@/app/_component/blog/blog.module.css";

interface Props {
  number: number;
  title: string;
  id: string;
}

export default function BlogCard(props: Props) {
  return (
    <Link className={styles.card} href={`/blog/${props.id}`}>
      <p className={styles.cardNumber}>{props.number}</p>
      <p>{props.title}</p>
    </Link>
  );
}
