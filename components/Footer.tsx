import styled from "styled-components";
import { Section } from "components/Layout";

const SubFooterSection = styled(Section)`
  background-color: ${(props) => props.theme.semidark};

  h3 {
    color: white;
    letter-spacing: -1.8px;
    font-family: "Bluu", serif;
    text-decoration: underline;
    font-size: 50px;
    margin-block-start: 80px;
    margin-block-end: 20px;
  }

  p {
    font-family: "AmericaRegular", sans-serif;
    font-size: 18px;
    line-height: 25px;
    color: hsla(0, 0%, 100%, 0.84);
    letter-spacing: -0.2px;
    margin-block-end: 15px;
  }

  a {
    color: ${(props) => props.theme.accent};
    font-family: "AmericaRegular", sans-serif;
    letter-spacing: -0.1px;
    line-height: 24px;
    text-decoration: none;
    padding-bottom: 2px;
    border-bottom: 1px solid ${(props) => props.theme.accent};
    font-size: 18px;
  }

  div {
    margin-top: 40px;
    padding-bottom: 80px;
  }

  @media screen and (max-width: 540px) {
    h3 {
      font-size: 28px;
      letter-spacing: -0.8px;
      line-height: 36px;
    }

    p {
      font-size: 16px;
    }

    a {
      font-size: 16px;
    }
  }
`;

const SubFooterLink = styled.a`
  width: 200px;
  height: 200px;
  background-color: #171717;
  display: inline-block;
  margin: 12.5px 25px 12.5px 0px;
  border: 4px solid transparent !important;
  text-align: center;
  transition: 0.25s ease-in-out;
  text-decoration: none;
  border-radius: 2px;

  article {
    margin-top: -1.5rem;
    padding: 29px;

    h4 {
      line-height: 1em;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #fff;
      font-size: 18px;
      margin-bottom: -0.2em;
      font-family: "AmericaMono", serif;
    }

    p {
      color: ${(props) => props.theme.accent};
      font-family: "AmericaRegular", sans-serif;
      font-style: italic;
      margin-bottom: 1em;
      font-size: 0.83em;
      transition: 0.15s ease-in-out;
      line-height: 1.5px;
    }

    img {
      width: 75px;
      height: 75px;
      fill: #fff;
      margin-top: 1rem;
    }
  }

  div {
    height: 50%;
    width: 100%;
    margin-top: -48.5%;
    background-position: center top;
    background-size: 80%;
    background-repeat: no-repeat;
    padding-bottom: 0px;
  }

  :hover {
    border: 4px solid ${(props) => props.theme.accent} !important;
  }

  :hover article p {
    color: #fff;
  }

  :nth-of-type(1) div {
    background-image: url("/footer/github-dark.svg");
  }

  :nth-of-type(2) div {
    background-image: url("/footer/dribbble-dark.svg");
  }

  :nth-of-type(3) div {
    background-image: url("/footer/devpost-dark.svg");
  }

  :nth-of-type(4) div {
    background-image: url("/footer/gitcoin-dark.svg");
  }

  @media screen and (max-width: 580px) {
    width: 100%;
    margin: 12.5px 0px;

    div {
      width: 70%;
      margin-left: 15%;
      margin-top: -100px;
    }
  }
`;

const FooterSection = styled(Section)`
  background-color: ${(props) => props.theme.dark};

  div:nth-child(1),
  div:nth-child(2) {
    display: inline-block;
    width: 50%;
    vertical-align: top;
    padding-top: 80px;
  }

  div h3 {
    font-family: "AmericaMono", sans-serif;
    letter-spacing: 1.5px;
    color: #f5f9ff;
    font-size: 13px;
    line-height: 24px;
    text-transform: uppercase;
    margin-bottom: 13px;
  }

  div:nth-child(1) p {
    max-width: 420px;
    color: rgba(245, 249, 255, 0.84);
    font-family: "AmericaRegular", sans-serif;
    letter-spacing: -0.2px;
    line-height: 1.6em;
  }

  div:nth-child(1) p a {
    text-decoration: none;
    color: inherit;
    padding-bottom: 1px;
    border-bottom: 0.5px solid rgba(245, 249, 255, 0.8);
  }

  div ul {
    list-style-type: none;
    padding: 0px;
  }

  div ul li {
    margin: 15px 0px;
  }

  div div {
    padding-top: 0px !important;
  }

  div div:nth-child(2) ul li:nth-child(2) a {
    padding-bottom: 1px;
    border-bottom: 0.5px solid rgba(245, 249, 255, 0.8);
  }

  div ul li a {
    text-decoration: none;
    color: rgba(245, 249, 255, 0.84);
    font-family: "AmericaRegular", sans-serif;
    letter-spacing: -0.2px;
  }

  div ul li a img {
    padding-left: 5px;
    transform: translateY(2.5px);
  }

  div:nth-child(3) {
    padding-bottom: 40px;
    margin-top: 60px;
  }

  div:nth-child(3) p {
    color: rgba(245, 249, 255, 0.84);
    font-family: "AmericaRegular", sans-serif;
    font-size: 13px;

    img {
      height: 30px;
      vertical-align: middle;
      padding-right: 10px;
      transform: translateY(-2px);
    }
  }

  @media screen and (max-width: 605px) {
    div:nth-child(1),
    div:nth-child(2),
    div:nth-child(2) div {
      width: 100%;
    }

    div:nth-child(2) {
      padding-top: 20px;
    }

    div:nth-child(2) > div:nth-of-type(2) {
      padding-top: 20px !important;
    }
  }

  @media screen and (min-width: 606px) and (max-width: 970px) {
    div:nth-child(1),
    div:nth-child(2) {
      width: 100%;
    }

    div:nth-child(2) {
      padding-top: 30px;
    }

    div:nth-child(2) div {
      width: 35%;
    }
  }
`;

export default function Footer() {
  return (
    <>
      <SubFooterSection>
        <h3>Interested in working together?</h3>
        <p>
          I'm always on the lookout for new opportunities. Especially ones with
          challenging work and tight deadlines.
        </p>
        <a href="mailto:contact@anishagnihotri.com">
          contact@anishagnihotri.com
        </a>
        <div>
          <SubFooterLink
            href="https://github.com/Anish-Agnihotri"
            target="_blank"
            rel="noopener noreferrer"
          >
            <article>
              <h4>Github</h4>
              <p>code proficiency</p>
              <img src="footer/github.svg" alt="Github Logo." />
            </article>
            <div />
          </SubFooterLink>
          <SubFooterLink
            href="https://dribbble.com/anishagnihotri"
            target="_blank"
            rel="noopener noreferrer"
          >
            <article>
              <h4>Dribbble</h4>
              <p>design insights</p>
              <img src="footer/dribbble.svg" alt="Dribbble Logo." />
            </article>
            <div />
          </SubFooterLink>
          <SubFooterLink
            href="https://devpost.com/348712712"
            target="_blank"
            rel="noopener noreferrer"
          >
            <article>
              <h4>Devpost</h4>
              <p>shipping experience</p>
              <img src="footer/devpost.svg" alt="Devpost Logo." />
            </article>
            <div />
          </SubFooterLink>
          <SubFooterLink
            href="https://gitcoin.co/anish-agnihotri"
            target="_blank"
            rel="noopener noreferrer"
          >
            <article>
              <h4>Gitcoin</h4>
              <p>open source work</p>
              <img src="footer/gitcoin.svg" alt="Gitcoin Logo." />
            </article>
            <div />
          </SubFooterLink>
        </div>
      </SubFooterSection>
      <FooterSection>
        <div>
          <h3>About me</h3>
          <p>
            Full-stack developer in Toronto, currently working at{" "}
            <a href="">Polychain</a>. Likes to spend his weekends hacking
            together ideas, building great projects.
          </p>
        </div>
        <div>
          <div>
            <h3>Follow my work</h3>
            <ul>
              <li>
                <a
                  href="https://github.com/anish-agnihotri"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code on GitHub
                  <img src="/tab.svg" alt="Open in new tab" />
                </a>
              </li>
              <li>
                <a
                  href="https://devpost.com/348712712"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hacks on Devpost
                  <img src="/tab.svg" alt="Open in new tab" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/_anishagnihotri"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Journey on Twitter
                  <img src="/tab.svg" alt="Open in new tab" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Get in touch</h3>
            <ul>
              <li>
                <a
                  href="https://twitter.com/_anishagnihotri"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DMs are open on Twitter
                  <img src="/tab.svg" alt="Open in new tab" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@anishagnihotri.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  contact@anishagnihotri.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <p>
            <img src="/logo.svg" /> Developed by Anish Agnihotri &copy; 2020.
          </p>
        </div>
      </FooterSection>
    </>
  );
}
