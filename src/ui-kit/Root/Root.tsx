import styled, { createGlobalStyle } from "styled-components";
import { Reset } from "styled-reset";
import gorditaBold from "ui-kit/assets/fonts/gordita/Gordita-Bold.ttf";
import gorditaRegular from "ui-kit/assets/fonts/gordita/Gordita-Regular.ttf";
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
    font-family: "Gordita";
    src: url("${gorditaBold}");
    font-weight: 'bold';
  }

  @font-face {
    font-family: "Gordita";
    src: url("${gorditaRegular}");
    font-weight: 'regular';
  }

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
