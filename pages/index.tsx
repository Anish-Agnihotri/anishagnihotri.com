// Theme setup
import { ThemeProvider } from "styled-components";
import { Container, theme } from "components/Layout";

// Page components
import Intro from "components/Intro";
import About from "components/About";
import Projects from "components/Projects";
import Awards from "components/Awards";
import Resume from "components/Resume";
import Footer from "components/Footer";

// Export Home page
export default function Home() {
  return (
    // Provide global theme styling via HOC
    <ThemeProvider theme={theme}>
      <Container>
        <Intro />
        <About />
        <Projects />
        <Awards />
        <Resume />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}
