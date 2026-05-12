"use client";

import styles from "./IconBox.module.scss";

export interface IconBoxProps {
  icon: string;
  heading: string;
  text: string;
  href?: string;
  variant?: "default" | "card" | "minimal" | "feature";
  iconStyle?: "filled" | "outlined" | "ghost";
  align?: "left" | "center";
  newTab?: boolean;
}

export function IconBox({
  icon,
  heading,
  text,
  href,
  variant = "default",
  iconStyle = "filled",
  align = "left",
  newTab = false,
}: IconBoxProps) {
  const Wrapper = href ? "a" : "div";
  const wrapperProps = href
    ? {
        href,
        ...(newTab && {
          target: "_blank",
          rel: "noopener noreferrer",
        }),
      }
    : {};

  return (
    <Wrapper
      className={[
        styles.iconBox,
        styles[`iconBox--variant-${variant}`],
        styles[`iconBox--align-${align}`],
        href && styles["iconBox--clickable"],
      ].join(" ")}
      {...wrapperProps}
    >
      <div
        className={[
          styles.iconBox__icon,
          styles[`iconBox__icon--${iconStyle}`],
        ].join(" ")}
        aria-hidden="true"
      >
        {icon}
      </div>
      <div className={styles.iconBox__content}>
        <h3 className={styles.iconBox__heading}>{heading}</h3>
        <p className={styles.iconBox__text}>{text}</p>
        {href && (
          <span className={styles.iconBox__link}>
            Learn more
            <svg
              className={styles.iconBox__linkIcon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
        )}
      </div>
    </Wrapper>
  );
}

export default IconBox;
