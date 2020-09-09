import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { Section } from "components/Layout";

// Resume container
const ResumeContainer = styled.div`
  perspective: 1000;

  div {
    width: 100%;
    height: auto;
    margin-top: -10px;
    transition: 0.1s;
    will-change: transform;

    img {
      width: 100%;
      height: 100%;
    }

    :nth-child(2),
    :nth-child(3) {
      transform-style: preserve-3d;
      perspective: 1000;
      transform-origin: center top;
    }

    :nth-child(3) {
      padding-bottom: 50px;
      margin-top: -4px !important;
    }

    :nth-child(4) {
      text-align: center;
      padding-bottom: 80px;

      h1 {
        font-family: "Bluu", serif;
        font-size: 32px;
        letter-spacing: -0.4px;
        line-height: 1.25em;
        margin-bottom: 15px;
      }

      a {
        color: ${(props) => props.theme.accent};
        font-family: "AmericaRegular", sans-serif;
        letter-spacing: -0.1px;
        text-decoration: none;
        padding-bottom: 2px;
        border-bottom: 1px solid ${(props) => props.theme.accent};
        font-size: 18px;
      }
    }
  }
`;

export default function Resume() {
  // Collect resume 1/3rd item to assess relative scroll position
  const resumeTop = useRef(null);
  const [resumeSecond, setResumeSecond] = useState<number>(-110);
  const [resumeSecondDisplay, setResumeSecondDisplay] = useState<boolean>(
    false
  );
  const [resumeThird, setResumeThird] = useState<number>(-110);
  const [resumeThirdDisplay, setResumeThirdDisplay] = useState<boolean>(false);

  function animateScroll(): void {
    const { height, top } = resumeTop.current.getBoundingClientRect();

    setResumeSecondDisplay(false);
    setResumeThirdDisplay(false);

    // If position from top < 148
    if (top < 148) {
      // Toggle 2/3rd item visibility
      setResumeSecondDisplay(true);
    }

    // When Top < 250, begin to animate resume 2/3rd
    if (top < 150) {
      // Animate from 110deg to 0deg
      let perspective = (top / 1.4) * -1;
      setResumeSecond(perspective < 0 ? perspective : 0);
    }

    // When Top < -50, begin to animate resume 3/3rd
    if (top < -25 + (height / 2) * -1) {
      // Toggle 3/3rd item visibility
      setResumeThirdDisplay(true);

      // Animate perspective degree shift
      let perspective = (95 - ((top + height / 2) / 2.27) * -1) * -1;
      setResumeThird(perspective < 0 ? perspective : 0);
    }
  }

  // On load:
  useEffect(() => {
    // Attach scroll event listener
    window.addEventListener("scroll", animateScroll);

    // On page exit
    return () => {
      // Remove scroll event listener
      window.removeEventListener("scroll", animateScroll);
    };
  }, []);

  return (
    <Section>
      <ResumeContainer>
        <div ref={resumeTop}>
          <img src="/resume/first.png" alt="Resume first third" />
        </div>
        <div
          style={{
            transform: `rotateX(${resumeSecond}deg)`,
            visibility: resumeSecondDisplay ? "visible" : "hidden",
          }}
        >
          <img src="/resume/second.png" alt="Resume second third" />
        </div>
        <div
          style={{
            transform: `rotateX(${resumeThird}deg)`,
            visibility: resumeThirdDisplay ? "visible" : "hidden",
          }}
        >
          <img src="/resume/third.png" alt="Resume third third" />
        </div>
        <div>
          <h1>Download my resume?</h1>
          <a
            href="/resume/Anish Agnihotri - Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Take a copy
          </a>
        </div>
      </ResumeContainer>
    </Section>
  );
}
