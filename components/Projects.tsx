import styled from "styled-components";
import { Section } from "components/Layout";

const ProjectLayout = styled.div`
  margin-top: 50px;
  text-align: left;
  display: block;
`;

const ProjectsSection = styled(Section)`
  h3 {
    font-size: 1.5625rem;
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

const ProjectReel = styled.div`
  padding: 200px 0px;
  text-align: center;
  background-color: #ccc;
`;

export default function Projects() {
  return (
    <ProjectLayout>
      <ProjectsSection>
        <h3>Showcase Projects</h3>
        <p>These are a few projects I've built and am especially proud of.</p>
      </ProjectsSection>
      <ProjectReel>
        <span>Reel goes here</span>
      </ProjectReel>
    </ProjectLayout>
  );
}
