import styles from "./Avatar.module.scss";

export interface AvatarProps {
  src?: string;
  alt?: string;
  name?: string;
  size?: "sm" | "md" | "lg" | "xl";
  status?: "online" | "offline" | "busy" | "away";
  shape?: "circle" | "square";
}

export function Avatar({
  src,
  alt = "",
  name = "",
  size = "md",
  status,
  shape = "circle",
}: AvatarProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const className = [
    styles.avatar,
    styles[`avatar--${size}`],
    styles[`avatar--${shape}`],
    status ? styles[`avatar--${status}`] : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={className} aria-label={name || alt}>
      {src ? (
        <img
          className={styles["avatar__image"]}
          src={src}
          alt={alt}
          loading="lazy"
        />
      ) : (
        <span className={styles["avatar__initials"]}>{initials}</span>
      )}
      {status && <span className={styles["avatar__status"]} aria-hidden="true" />}
    </div>
  );
}
