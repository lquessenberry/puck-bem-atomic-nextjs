import styles from "./Heading.module.scss";

export interface HeadingProps {
  text: string;
  level?: "h1" | "h2" | "h3" | "h4";
  align?: "left" | "center" | "right";
}

export function Heading({ text, level = "h2", align = "left" }: HeadingProps) {
  const Tag = level;

  return <Tag className={`${styles.heading} ${styles[`heading--${level}`]} ${styles[`heading--align-${align}`]}`}>{text}</Tag>;
}
