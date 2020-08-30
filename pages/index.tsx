import { ThemeProvider } from "styled-components";
import { Container, theme } from "components/Layout";

import Intro from "components/Intro";
import About from "components/About";
import Projects from "components/Projects";
import Footer from "components/Footer";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Intro />
        <About />
        <Projects />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

// Projects
// Awards
// Resume
// CTA
// Footer
