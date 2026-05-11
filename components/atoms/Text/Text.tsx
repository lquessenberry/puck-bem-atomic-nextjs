import styles from "./Text.module.scss";

export interface TextProps {
  text: string;
  size?: "sm" | "md" | "lg";
  tone?: "default" | "muted";
}

export function Text({ text, size = "md", tone = "default" }: TextProps) {
  return <p className={`${styles.text} ${styles[`text--${size}`]} ${styles[`text--${tone}`]}`}>{text}</p>;
}
