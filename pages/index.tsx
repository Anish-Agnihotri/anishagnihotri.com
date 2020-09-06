import { ThemeProvider } from "styled-components";
import { Container, theme } from "components/Layout";

import Intro from "components/Intro";
import About from "components/About";
import Projects from "components/Projects";
import Awards from "components/Awards";
import Resume from "components/Resume";
import Footer from "components/Footer";

export default function Home() {
  return (
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

// Comments
// Compression
// Meta
// Analytics
// Performance (SSR + styled-components)
