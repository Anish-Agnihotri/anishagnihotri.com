import styled from "styled-components";
import { Section } from "components/Layout";

// Projects layout section
const ProjectLayout = styled.div`
  margin-top: 50px;
  text-align: left;
  display: block;
`;

// Projects interior section
const ProjectsSection = styled(Section)`
  h3 {
    font-size: 30px;
    font-family: "Bluu", serif;
    letter-spacing: -0.4px;
    line-height: 1.25em;
    margin-bottom: 15px;
  }

  p {
    font-size: 17px;
    font-family: "AmericaRegular", sans-serif;
    letter-spacing: -0.3px;
    line-height: 24px;
    margin: 0px;
    color: ${(props) => props.theme.text.light};
  }
`;

// Project showcase section
const ProjectShowcase = styled(Section)`
  margin-top: 20px;
`;

// Project item
const Project = styled.a`
  display: inline-block;
  width: calc(50% - 40px);
  border: 5px solid transparent;
  min-width: 400px;
  border-radius: 13px;
  margin: 15px 30px 15px 0px;
  transition: 100ms ease-in-out;
  -webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.15);

  div {
    width: 100%;
    display: inline-block;
    background-color: ${(props) => props.theme.header.decoration};
    color: #fff;

    :nth-child(1) {
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;

      img {
        width: 100%;
        border-top-left-radius: 7px;
        border-top-right-radius: 7px;
      }
    }

    :nth-child(2) {
      width: calc(100% - 40px);
      padding: 0px 20px;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;

      h3 {
        color: white;
        letter-spacing: -1px;
        font-family: "Bluu", serif;
        font-size: 25px;
        margin-block-start: 12.5px;
        margin-block-end: 7.5px;
      }

      p {
        font-family: "AmericaRegular", sans-serif;
        font-size: 15px;
        line-height: 20px;
        color: hsla(0, 0%, 100%, 0.84);
        letter-spacing: -0.2px;
        margin-block-start: 0px;
        margin-block-end: 20px;
      }
    }
  }

  :hover {
    transform: scale(1.05);
    border-color: ${(props) => props.theme.accent};
  }

  @media screen and (max-width: 500px) {
    min-width: 100%;
    width: 100%;
    margin-right: 0px;
  }
`;

export default function Projects() {
  return (
    <ProjectLayout>
      <ProjectsSection>
        <h3>Showcase Projects</h3>
        <p>
          These are a few projects I've built myself and am especially proud of.
        </p>
      </ProjectsSection>
      <ProjectShowcase>
        <Project
          href="https://presubscribe.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <picture>
              <source srcSet="projects/presubscribe.webp" type="image/webp" />
              <source srcSet="projects/presubscribe.jpg" type="image/jpeg" />
              <img src="projects/presubscribe.jpg" alt="Presubscribe" />
            </picture>
          </div>
          <div>
            <h3>Presubscribe</h3>
            <p>
              Support your favorite creators, before they're independent.
              Presubscribe to precommit to your Twitter graph.
            </p>
          </div>
        </Project>
        <Project
          href="https://onlytweets.co/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <picture>
              <source srcSet="projects/onlytweets.webp" type="image/webp" />
              <source srcSet="projects/onlytweets.jpg" type="image/jpeg" />
              <img src="projects/onlytweets.jpg" alt="OnlyTweets" />
            </picture>
          </div>
          <div>
            <h3>OnlyTweets</h3>
            <p>
              Native monetization through Twitter. Create and subscribe to
              paywalled Twitter accounts and build effective communities.
            </p>
          </div>
        </Project>
        <Project
          href="https://weve.email"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <picture>
              <source srcSet="projects/weve.webp" type="image/webp" />
              <source srcSet="projects/weve.jpg" type="image/jpeg" />
              <img src="projects/weve.jpg" alt="Weve" />
            </picture>
          </div>
          <div>
            <h3>Weve</h3>
            <p>
              A weavemail client implementation&mdash;private, decentralized,
              and open-source mail&mdash;on the Arweave permaweb.
            </p>
          </div>
        </Project>
        <Project
          href="https://apps.apple.com/us/app/memory-mood-tracker-diary/id1500958805"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <picture>
              <source srcSet="projects/memory.webp" type="image/webp" />
              <source srcSet="projects/memory.jpg" type="image/jpeg" />
              <img src="projects/memory.jpg" alt="Memory" />
            </picture>
          </div>
          <div>
            <h3>Memory</h3>
            <p>
              Enter, track, cherish. Look back at your best moments with Memory.
              An iOS-first mood tracker &amp; diary app.
            </p>
          </div>
        </Project>
      </ProjectShowcase>
    </ProjectLayout>
  );
}
