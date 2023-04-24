import styles from "../../../App.module.css";
import Project from "./Project";

const projects = [
  {
    title: "Simple ToDo App",
    description:
      "A simple responsive React web application represents the main concepts and hooks of React Library such as useState(), useRef() hooks, in addition, using Chakra-ui for the UI design.",
    imageSrc:
      "https://github.com/Abdurrahman1299/Simple.Todo.React.App/blob/master/pics/app.png?raw=true",
    github: "https://github.com/Abdurrahman1299/Simple.Todo.React.App",
  },
  {
    title: "Little-Lemon-App",
    description:
      "A cross-platform mobile application developed with React Native library using main concepts of design and state management, with theme change feature to toggle theme depending on the device theme. Also using React Navigation to enabling Stack and Tab navigation concepts.",
    imageSrc:
      "https://github.com/Abdurrahman1299/Little-Lemon-App/blob/master/app.pics/appScreens.png?raw=true",
    github: "https://github.com/Abdurrahman1299/Little-Lemon-App",
  },
  {
    title: "CSS Template #3 Elzero Web School",
    description:
      "This web application is only a practice of CSS fundamentals and advanced features and properties. And it shows how to create a web page application that is responsive, flexable, and user friendly.",
    imageSrc:
      "https://github.com/Abdurrahman1299/HTML-CSS-Template-3---ZeroWebSchool/blob/main/tem-3.png?raw=true",
    github:
      "https://github.com/Abdurrahman1299/HTML-CSS-Template-3---ZeroWebSchool",
  },
  {
    title: "Portfolio Coursera Application",
    description:
      "A web application that was the final assessment to pass the 'Advanced React' course in Coursera provided by Meta 'Facebook'. All functionalities and design is created by me.",
    imageSrc:
      "https://github.com/Abdurrahman1299/Simple.Todo.React.App/blob/master/pics/app.png",
    github: "https://github.com/Abdurrahman1299/Expenses_Tracker_App",
  },
];
export default function ProjectsSection() {
  return (
    <div className={styles.projectsSection} id="projects">
      <div className={styles.toEdit}>
        <h1 className={styles.projectsHead}>Featured Projects</h1>

        <div className={styles.projectsContainer}>
          {projects.map((project) => (
            <Project
              key={project.title}
              imageSrc={project.imageSrc}
              title={project.title}
              description={project.description}
              githubLink={project.github}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
