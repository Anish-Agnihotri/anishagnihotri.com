import { ThemeProvider } from "styled-components";
import { Container, theme } from "components/Layout";

import Intro from "components/Intro";
import About from "components/About";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Intro />
        <About />
      </Container>
    </ThemeProvider>
  );
}

// Intro
// About
// Projects
// Awards
// CTA
// Footer
