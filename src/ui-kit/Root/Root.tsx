import { createGlobalStyle } from "styled-components";
import { Reset } from "styled-reset";
import gorditaBold from "ui-kit/assets/fonts/gordita/Gordita-Bold.ttf";
import gorditaRegular from "ui-kit/assets/fonts/gordita/Gordita-Regular.ttf";
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
