import styles from "../../../App.module.css";

export default function Project(props) {
  return (
    <div className={styles.projectCard}>
      <img
        className={styles.projectImage}
        src={props.imageSrc}
        alt={props.title}
      />
      <div className={styles.textContainer}>
        <h4 className={styles.projectTitle}>{props.title}</h4>
        <p className={styles.projectDescription}>{props.description}</p>
      </div>
      <a
        className={styles.exploreButton}
        href={props.githubLink}
        target="blank"
      >
        Explore Code on Github!
      </a>
    </div>
  );
}
