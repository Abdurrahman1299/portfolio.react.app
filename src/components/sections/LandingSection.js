import styles from "../../App.module.css";
import photo from "../../utls/me20.jpg";

export default function LandingSection() {
  return (
    <div id="landing" className={styles.landingSection}>
      <div className={styles.avatarContainer}>
        <img className={styles.avatar} src={photo} alt="img" />
      </div>
      <p className={styles.greeting}>Hello, I am Abdurrahman</p>
      <br />
      <p className={styles.text}>
        A Frontend Developer <br /> Specialized in React
      </p>
    </div>
  );
}
