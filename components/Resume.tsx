import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { Section } from "components/Layout";

const ResumeSection = styled(Section)``;

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
  const resumeTop = useRef(null);
  const [resumeSecond, setResumeSecond] = useState(-110);
  const [resumeSecondDisplay, setResumeSecondDisplay] = useState(false);
  const [resumeThird, setResumeThird] = useState(-110);
  const [resumeThirdDisplay, setResumeThirdDisplay] = useState(false);

  const animateScroll = () => {
    const { height, top } = resumeTop.current.getBoundingClientRect();

    setResumeSecondDisplay(false);
    setResumeThirdDisplay(false);

    if (top < 235) {
      setResumeSecondDisplay(true);
    }
    // When Top < 250, begin to animate resume 2/3rd
    if (top < 250) {
      // Animate from 110deg to 0deg
      let perspective = (top / 2.27) * -1;
      setResumeSecond(perspective < 0 ? perspective : 0);
    }

    // When Top < -50, begin to animate resume 3/3rd
    if (top < -25 + (height / 2) * -1) {
      setResumeThirdDisplay(true);

      let perspective = (95 - ((top + height / 2) / 2.27) * -1) * -1;
      setResumeThird(perspective < 0 ? perspective : 0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", animateScroll);

    return () => {
      window.removeEventListener("scroll", animateScroll);
    };
  }, []);

  return (
    <ResumeSection>
      <ResumeContainer>
        <div ref={resumeTop}>
          <picture>
            <source srcSet="/resume/first.webp" type="image/webp" />
            <source srcSet="/resume/first.jpg" type="image/jpeg" />
            <img src="/resume/first.jpg" alt="Resume first third" />
          </picture>
        </div>
        <div
          style={{
            transform: `rotateX(${resumeSecond}deg)`,
            visibility: resumeSecondDisplay ? "visible" : "hidden",
          }}
        >
          <picture>
            <source srcSet="/resume/second.webp" type="image/webp" />
            <source srcSet="/resume/second.jpg" type="image/jpeg" />
            <img src="/resume/second.jpg" alt="Resume second third" />
          </picture>
        </div>
        <div
          style={{
            transform: `rotateX(${resumeThird}deg)`,
            visibility: resumeThirdDisplay ? "visible" : "hidden",
          }}
        >
          <picture>
            <source srcSet="/resume/third.webp" type="image/webp" />
            <source srcSet="/resume/third.jpg" type="image/jpeg" />
            <img src="/resume/third.jpg" alt="Resume third third" />
          </picture>
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
    </ResumeSection>
  );
}
