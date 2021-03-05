import { useEffect, useState } from "react";
import { Section } from "components/Layout";
import styled from "styled-components";

// About section
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

// About section rotating image
const AboutImage = styled.div`
  position: relative;
  transform: translateY(-25px);

  img:nth-of-type(1) {
    max-width: 350px;
    will-change: transform, rotate;
  }
  picture {
    img {
      border-radius: 50%;
      width: 250px;
      box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
      position: absolute;
      top: 50px;
      left: 50px;
    }
  }

  @media screen and (max-width: 1024px) {
    transform: none;

    img:nth-of-type(1) {
      max-width: 200px;
    }
    picture {
      img {
        width: 145px;
        top: 27.5px;
        left: 27.5px;
      }
    }
  }
`;

export default function About() {
  // Set initial pageY position to 0
  const [y, setY] = useState<number>(0);

  // Check for pageY position
  function animateScroll(): void {
    // Set Y == pageY position
    setY(window.scrollY);
  }

  // On page load and until exit
  useEffect(() => {
    // Add event listener to scroll to check for pageY position
    window.addEventListener("scroll", animateScroll);

    // On page exit:
    return () => {
      // Remove event listener
      window.removeEventListener("scroll", animateScroll);
    };
  }, []);

  return (
    <AboutSection>
      <div>
        <p>My name is Anish, I'm 18 years old, and I like to build software.</p>
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
          I work at{" "}
          <a
            href="https://polychain.capital/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Polychain Capital
          </a>
          , evaluating blockchain projects, conducting technical research, and
          building internal tooling. On the side, I help friends at{" "}
          <a
            href="https://www.usestir.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Stir
          </a>{" "}
          ship one-off drops for creators.
        </p>
      </div>
      <div>
        <AboutImage>
          <img
            style={{
              transform: `rotate(${0.3 * y + "deg"})`,
            }}
            src="about/me-rotation.png"
            alt="Anish headshot border"
          />
          <picture>
            <source srcSet="about/me.webp" type="image/webp" />
            <source srcSet="about/me.jpg" type="image/jpeg" />
            <img src="about/me.jpg" alt="Anish headshot" />
          </picture>
        </AboutImage>
      </div>
    </AboutSection>
  );
}
