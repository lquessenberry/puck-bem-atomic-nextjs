import styles from "./Testimonial.module.scss";

export interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating?: 1 | 2 | 3 | 4 | 5;
  imageSrc?: string;
  imageAlt?: string;
}

export function Testimonial({
  quote,
  author,
  role,
  company,
  rating = 5,
  imageSrc,
  imageAlt = "",
}: TestimonialProps) {
  const stars = Array.from({ length: rating }).map(() => "★").join(" ");

  return (
    <figure className={styles.testimonial}>
      {imageSrc ? <img className={styles["testimonial__image"]} src={imageSrc} alt={imageAlt} /> : null}
      <figcaption className={styles["testimonial__rating"]} aria-label={`${rating} out of 5 stars`}>
        {stars}
      </figcaption>
      <blockquote className={styles["testimonial__quote"]}>{quote}</blockquote>
      <figcaption className={styles["testimonial__author"]}>
        {author} · {role}, {company}
      </figcaption>
    </figure>
  );
}
