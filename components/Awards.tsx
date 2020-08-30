import styled from "styled-components";
import { Section } from "components/Layout";

const AwardsSection = styled(Section)`
  h1 {
    color: ${(props) => props.theme.header.main};
    font-size: 30px;
    letter-spacing: -1.8px;
    margin-block-start: 40px;
    margin-block-end: 20px;
    font-family: "Bluu", serif;
  }

  p {
    font-family: "AmericaRegular", sans-serif;
    font-size: 18px;
    line-height: 30px;
    margin-block-end: 60px;
  }
`;

const Year = styled.span`
  color: ${(props) => props.theme.accent};
`;

const Accolade = styled.a`
  color: ${(props) => props.theme.text.light};
  text-decoration: none;
  border-bottom: 1px solid ${(props) => props.theme.text.light};

  &.highlight {
    color: ${(props) => props.theme.semidark};
  }
`;

const Divider = styled.span`
  color: ${(props) => props.theme.text.light};
  padding: 0px 10px;
`;

const twenty = [
  {
    url:
      "https://opensource.googleblog.com/2020/02/announcing-our-google-code-in-2019.html",
    name: "Google Code-in Global Finalist",
    highlight: "true",
  },
  {
    url:
      "https://medium.com/@arweave/gitcoin-new-york-blockchain-week-virtual-hackathon-winners-d39d6364b7bf",
    name: "Winner of New York Blockchain Week",
  },
  {
    url:
      "https://medium.com/@arweave/gitcoin-new-york-blockchain-week-virtual-hackathon-winners-d39d6364b7bf",
    name: "Best Mid-Week Hack at New York Blockchain Week",
  },
  {
    url:
      "https://uwaterloo.ca/undergraduate-entrance-awards/awards/university-waterloo-presidents-scholarship-distinction",
    name: "Presidents Scholarship of Distinction",
  },
];

const nineteen = [
  {
    url: "https://devpost.com/software/algofund",
    name: "Finalist at Hack the North 2019 (UWaterloo)",
  },
  {
    url: "https://devpost.com/software/algofund",
    name: "Best Blockchain Hack at Hack the North 2019 (UWaterloo)",
  },
  {
    url: "https://devpost.com/software/squaresign",
    name: "3x Best Squarelink Hack at ETHBoston (Harvard)",
  },
  {
    url: "https://devpost.com/software/patreaion",
    name: "2nd Place Overall at ETHUofT (UofT)",
  },
  {
    url: "https://devpost.com/software/patreaion",
    name: "Best Totle Hack at ETHUofT (UofT)",
  },
  {
    url: "https://devpost.com/software/patreaion",
    name: "Best Aion Hack at ETHUofT (UofT)",
  },
];

const eighteen = [
  {
    url: "https://developer.apple.com/wwdc20/scholarships/",
    name: "Apple WWDC18 Scholar",
    highlight: "true",
  },
  {
    url: "https://consensys.net/academy/2018developer/",
    name: "Consensys Developer Academy Scholar",
  },
  {
    url: "https://devpost.com/software/uescrow",
    name: "Finalist at BlockHackTO",
  },
  {
    url: "https://devpost.com/software/uescrow",
    name: "Best UCash Hack at BlockHackTO",
  },
  {
    url: "https://devpost.com/software/pidentity",
    name: "Best Blockchain Hack at Hack the North 2018 (UWaterloo)",
  },
  {
    url: "https://devpost.com/software/signrecord",
    name: "Top 10 Hack at PennApps XVIII (UPenn)",
  },
  {
    url: "https://devpost.com/software/signrecord",
    name: "Top 30 Hack at PennApps XVIII (UPenn)",
  },
  {
    url: "https://devpost.com/software/signrecord",
    name: "Best Blockchain Hack at PennApps XVIII (UPenn)",
  },
  {
    url: "https://devpost.com/software/crybl-competitive-crypto-trading",
    name: "Best Financial Hack at PennApps XVII (UPenn)",
  },
  {
    url: "https://devpost.com/software/touchcoin",
    name: "Best Financial Hack at THacks2 (UofT)",
  },
  {
    url: "https://legaltechhackto.splashthat.com/",
    name: "Finalist at Legal Tech Hack",
  },
];

export default function Awards() {
  return (
    <AwardsSection>
      <h1>Resume</h1>
      <p>
        <Year>2020</Year>
        <Divider>/</Divider>
        {twenty.map((accolade, i) => {
          return (
            <>
              <Accolade
                key={i}
                href={accolade.url}
                target="_blank"
                rel="nooopener noreferrer"
                className={`${
                  accolade.highlight === "true" ? "highlight" : ""
                }`}
              >
                {accolade.name}
              </Accolade>
              <Divider>/</Divider>
            </>
          );
        })}
        <Year>2019</Year>
        <Divider>/</Divider>
        {nineteen.map((accolade, i) => {
          return (
            <>
              <Accolade
                key={i}
                href={accolade.url}
                target="_blank"
                rel="nooopener noreferrer"
              >
                {accolade.name}
              </Accolade>
              <Divider>/</Divider>
            </>
          );
        })}
        <Year>2018</Year>
        <Divider>/</Divider>
        {eighteen.map((accolade, i) => {
          return (
            <>
              <Accolade
                key={i}
                href={accolade.url}
                target="_blank"
                rel="nooopener noreferrer"
                className={`${
                  accolade.highlight === "true" ? "highlight" : ""
                }`}
              >
                {accolade.name}
              </Accolade>
              {i !== 10 ? <Divider>/</Divider> : null}
            </>
          );
        })}
      </p>
    </AwardsSection>
  );
}
