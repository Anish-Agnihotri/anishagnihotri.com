import { useEffect, useState } from "react";
import styled from "styled-components";
import { Section } from "components/Layout";

const AboutSection = styled(Section)`
  display: flex;
  flex-direction: row;
  margin-top: 55px;

  div:nth-child(1) {
    flex: 2;
    width: calc(100% - 400px);
  }

  div:nth-child(2) {
    flex: 1;
    width: 325px;
    padding-left: 75px;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;

    div:nth-child(1) {
      order: 2;
      width: 100%;
      margin-top: 15px;
    }

    div:nth-child(2) {
      order: 1;
      width: 100%;
      padding-left: 0px;
    }

    div p {
      font-size: 17px !important;
    }
  }

  div p {
    font-family: "AmericaRegular", sans-serif;
    font-size: 19px;
    letter-spacing: -0.2px;
    color: ${(props) => props.theme.header.decoration};
    line-height: 32px;
  }

  div p a {
    color: #000;
    text-decoration: none;
    padding-bottom: 2px;
    border-bottom: 2px solid ${(props) => props.theme.accent};
    transition: 200ms ease-in-out;
  }

  div p a:hover {
    padding-bottom: 0px;
  }
`;

const AboutImage = styled.div`
  position: relative;
  transform: translateY(-25px);

  img:nth-of-type(1) {
    max-width: 350px;
  }
  img:nth-of-type(2) {
    max-width: 250px;
    border-radius: 50%;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 50px;
    left: 50px;
  }

  @media screen and (max-width: 1024px) {
    transform: none;

    img:nth-of-type(1) {
      max-width: 200px;
    }
    img:nth-of-type(2) {
      max-width: 145px;
      top: 27.5px;
      left: 27.5px;
    }
  }
`;

export default function About() {
  const [y, setY] = useState(0);

  const animateScroll = () => {
    setY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", animateScroll);

    return () => {
      window.removeEventListener("scroll", animateScroll);
    };
  }, []);

  return (
    <AboutSection>
      <div>
        <p>My name is Anish, I'm 17 years old, and I like to build software.</p>
        <p>
          I started programming in the fifth grade and have been typing away at
          a keyboard ever since. In high school, I grew passionate about
          hackathons, burning sleepless nights{" "}
          <a
            href="https://devpost.com/348712712"
            target="_blank"
            rel="noopener noreferrer"
          >
            shipping projects
          </a>{" "}
          .
        </p>
        <p>
          Right now, I'm a Research Intern at{" "}
          <a
            href="https://polychain.capital/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Polychain Capital
          </a>
          , evaluating blockchain projects, identifying network trends, and
          building{" "}
          <a
            href="https://stats.polychainlabs.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            internal tools
          </a>
          . I'm also an incoming Freshman at the University of Waterloo.
        </p>
      </div>
      <div>
        <AboutImage>
          <img
            style={{
              transform: `rotate(${0.3 * y + "deg"})`,
            }}
            src="/me-rotation.png"
            alt="Anish headshot border"
          />
          <img src="/me.jpg" alt="Anish headshot" />
        </AboutImage>
      </div>
    </AboutSection>
  );
}
