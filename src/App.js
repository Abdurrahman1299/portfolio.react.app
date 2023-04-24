import Footer from "./components/Footer";
import Header from "./components/Header";
import ContactMeSection from "./components/sections/ContactMeSection";
import LandingSection from "./components/sections/LandingSection";
import ProjectsSection from "./components/sections/projectsSection/ProjectsSection";

export default function App() {
  return (
    <div>
      <Header />
      <LandingSection />
      <ProjectsSection />
      <ContactMeSection />
      <Footer />
    </div>
  );
}
