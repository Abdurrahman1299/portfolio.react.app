import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faFacebook,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

import styles from "../App.module.css";
import { useState } from "react";

export default function Header() {
  const socials = [
    {
      icon: faEnvelope,
      url: "mailto: abdurrahmanms09@gmail.com",
    },
    {
      icon: faFacebook,
      url: "https://www.facebook.com/abdo.muhammad.99",
    },
    {
      icon: faLinkedin,
      url: "https://www.linkedin.com/in/abdurrahman-el-sayed/",
    },
    {
      icon: faStackOverflow,
      url: "https://stackoverflow.com/users/19086227/abdurrahman-sayed",
    },
    {
      icon: faGithub,
      url: "https://github.com/Abdurrahman1299",
    },
  ];
  const [isDimmed, setIsDimmed] = useState(false);
  window.onscroll = () => {
    if (window.scrollY > 500) {
      setIsDimmed(true);
    } else {
      setIsDimmed(false);
    }
  };
  return (
    <div
      className={styles.headerContainer}
      style={isDimmed ? { opacity: "0" } : {}}
    >
      <div className={styles.socialList}>
        {socials.map((social) => (
          <a
            href={social.url}
            target="blank"
            className={styles.social}
            key={social.icon + social.url}
          >
            <FontAwesomeIcon icon={social.icon} color="#fff" size="2x" />
          </a>
        ))}
      </div>

      <div className={styles.linksContainer}>
        <a className={styles.link} href="#projects">
          Projects
        </a>
        <a className={styles.link} href="#contactMe">
          Contact Me
        </a>
      </div>
    </div>
  );
}
