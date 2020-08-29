import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
`;

export const Section = styled.div`
  width: 1000px;
  padding: 0px calc((100% - 1000px) / 2);
  display: inline-block;
  text-align: left;

  @media screen and (max-width: 1100px) {
    width: calc(100% - 100px);
    padding: 0px 50px;
  }
`;

export const theme = {
  background: "#f7faff",
  accent: "#ffb41f",
  header: {
    main: "#06090e",
    decoration: "rgba(6,9,14,.84)",
  },
  text: {
    light: "rgba(6,9,14,.64)",
  },
};
