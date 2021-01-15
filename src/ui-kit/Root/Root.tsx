import styled, { createGlobalStyle } from "styled-components";
import { Reset } from "styled-reset";
import "ui-kit/assets/fonts/gordita/stylesheet.css";
import AvenirLTStd from "ui-kit/assets/fonts/avenir/AvenirLTStd-Book.otf";

export function Root(props: React.PropsWithChildren<{}>) {
  return (
    <RootContainer>
      <Reset />
      <Fonts />
      <General />

      {props.children}
    </RootContainer>
  );
}

const RootContainer = styled("main")`
  height: 100%;
`;

export const Fonts = createGlobalStyle`
  @font-face {
    font-family: "Avenir";
    src: url("${AvenirLTStd}");
  }
`;

export const General = createGlobalStyle`
  html, body, #root {
    height: 100%;
  }
`;
