import styles from "./HeadLine.module.css";

interface Props {
  text: string;
  subText: string;
}

export default function Headline(props: Props) {
  return (
    <div className={styles.headLine}>
      <h1>{props.text}</h1>
      <span className={styles.subText}>{props.subText}</span>
    </div>
  );
}
