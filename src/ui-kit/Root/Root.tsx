import styled from "styled-components";
import { Reset } from "styled-reset";
import "ui-kit/assets/fonts/avenir/stylesheet.css";
import "ui-kit/assets/fonts/gordita/stylesheet.css";

export function Root(props: React.PropsWithChildren<{}>) {
  return (
    <RootContainer>
      <Reset />

      {props.children}
    </RootContainer>
  );
}

const RootContainer = styled("main")`
  height: 100%;
`;
