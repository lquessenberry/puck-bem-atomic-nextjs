"use client";

import Link from "next/link";
import styles from "./FeaturedWorkGrid.module.scss";

export interface ProjectItem {
  id: string;
  title: string;
  client?: string;
  date?: string;
  imageSrc?: string;
  href?: string;
  badge?: string;
}

export interface FeaturedWorkGridProps {
  title?: string;
  eyebrow?: string;
  projects: ProjectItem[];
  columns?: 2 | 3;
}

export function FeaturedWorkGrid({
  title = "Featured Work",
  eyebrow,
  projects,
  columns = 3,
}: FeaturedWorkGridProps) {
  return (
    <section className={styles["featured-work-grid"]}>
      {(eyebrow || title) && (
        <div className={styles["featured-work-grid__header"]}>
          {eyebrow && <div className={styles["featured-work-grid__eyebrow"]}>{eyebrow}</div>}
          <h2 className={styles["featured-work-grid__title"]}>{title}</h2>
        </div>
      )}

      <div className={`${styles["featured-work-grid__grid"]} ${styles[`grid--${columns}`]}`}>
        {projects.map((project) => {
          const CardContent = (
            <>
              {project.imageSrc && (
                <div className={styles["project-card__image-wrapper"]}>
                  <img 
                    src={project.imageSrc} 
                    alt={project.title} 
                    className={styles["project-card__image"]} 
                  />
                  {project.badge && (
                    <div className={styles["project-card__badge"]}>{project.badge}</div>
                  )}
                </div>
              )}
              <div className={styles["project-card__content"]}>
                <h3 className={styles["project-card__title"]}>{project.title}</h3>
                {(project.client || project.date) && (
                  <div className={styles["project-card__meta"]}>
                    {project.client && <span>{project.client}</span>}
                    {project.client && project.date && <span>·</span>}
                    {project.date && <span>{project.date}</span>}
                  </div>
                )}
              </div>
            </>
          );

          return project.href ? (
            <Link 
              href={project.href} 
              key={project.id} 
              className={styles["project-card"]}
            >
              {CardContent}
            </Link>
          ) : (
            <div key={project.id} className={styles["project-card"]}>
              {CardContent}
            </div>
          );
        })}
      </div>
    </section>
  );
}
