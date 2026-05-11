import styles from "./Testimonial.module.scss";

export interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating?: 1 | 2 | 3 | 4 | 5;
}

export function Testimonial({ quote, author, role, company, rating = 5 }: TestimonialProps) {
  const stars = Array.from({ length: rating }).map(() => "★").join(" ");

  return (
    <figure className={styles.testimonial}>
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
