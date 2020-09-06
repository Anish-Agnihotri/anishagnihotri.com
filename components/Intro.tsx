import styled from "styled-components";
import { Section } from "components/Layout";

const IntroSection = styled(Section)`
  margin-top: 120px;

  @media screen and (max-width: 1100px) {
    margin-top: 60px;
  }
`;

const IntroName = styled.h3`
  text-transform: uppercase;
  font-family: "AmericaMono", sans-serif;
  color: ${(props) => props.theme.accent};
  font-size: 20px;
  letter-spacing: 2.2px;
  line-height: 40px;
  margin-block-end: 0px;

  @media screen and (max-width: 540px) {
    font-size: 16px;
    line-height: 31px;
    letter-spacing: 1.5px;
  }
`;

const IntroHeading = styled.h1`
  color: ${(props) => props.theme.header.main};
  font-size: 61px;
  letter-spacing: -1.8px;
  line-height: 80px;
  font-family: "Bluu", serif;
  text-decoration: underline;
  text-decoration-color: ${(props) => props.theme.header.decoration};
  margin: 0px 0px 55px 0px;
  max-width: 700px;

  @media screen and (max-width: 540px) {
    font-size: 28px;
    letter-spacing: -0.8px;
    line-height: 36px;
    margin-bottom: 47px;
  }

  @media screen and (min-width: 541px) and (max-width: 840px) {
    font-size: 48px;
    letter-spacing: -1.4px;
    line-height: 64px;
    margin-bottom: 40px;
  }
`;

const IntroSubs = styled.div`
  max-width: 300px;
  display: inline-block;

  span {
    font-family: "AmericaMono", sans-serif;
    text-transform: uppercase;
    font-size: 0.8rem;
    letter-spacing: 1.5px;
    line-height: 24px;
    margin-bottom: 6px;
    color: ${(props) => props.theme.header.decoration};
  }

  h2 {
    margin: 0px;
    font-size: 1.25rem;
    font-family: "Bluu", serif;
    letter-spacing: -0.2px;
    line-height: 24px;
    margin-bottom: 5px;
    color: ${(props) => props.theme.header.main};
  }

  p {
    font-family: "AmericaRegular", sans-serif;
    letter-spacing: -0.3px;
    line-height: 24px;
    margin: 0px;
    color: ${(props) => props.theme.text.light};
  }

  @media screen and (max-width: 840px) {
    display: block;

    :nth-of-type(2) {
      margin-top: 37px;
    }
  }
`;

export default function Intro() {
  return (
    <IntroSection>
      <IntroName>Anish Agnihotri</IntroName>
      <IntroHeading>Serial hacker translating ideas to code</IntroHeading>
      <IntroSubs>
        <span>Current Position</span>
        <h2>Research Intern, Polychain</h2>
        <p>Technical research in blockchain, cryptoeconomics, and networks.</p>
      </IntroSubs>
      <IntroSubs>
        <span>With a passion for</span>
        <h2>Blockchain &amp; Economics</h2>
        <p>
          Exploring traditional markets, network effects, and financial
          modelling.
        </p>
      </IntroSubs>
    </IntroSection>
  );
}
