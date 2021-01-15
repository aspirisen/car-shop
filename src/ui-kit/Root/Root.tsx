import { createGlobalStyle } from "styled-components";
import { Reset } from "styled-reset";
import gorditasRegular from "ui-kit/assets/fonts/gorditas/Gorditas-Regular.ttf";
import gorditasBold from "ui-kit/assets/fonts/gorditas/Gorditas-Bold.ttf";
import AvenirLTStd from "ui-kit/assets/fonts/avenir/AvenirLTStd-Book.otf";

export function Root(props: React.PropsWithChildren<{}>) {
  return (
    <main>
      <Reset />
      <Fonts />

      {props.children}
    </main>
  );
}

export const Fonts = createGlobalStyle`
  @font-face {
    font-family: "Gorditas";
    font-weight: bold;
    src: url("${gorditasBold}") format("truetype");
  }

  @font-face {
    font-family: "Gorditas";
    font-weight: initial;
    src: url("${gorditasRegular}");
  }

  @font-face {
    font-family: "Avenir";
    src: url("${AvenirLTStd}");
  }
`;
