import React from "react";
import styled from "styled-components";
import { Colors, ColorsEnum } from "ui-kit/theme/colors";
import { Sizes } from "ui-kit/theme/sizes";

export interface UnderlineProps {
  color: Colors;
  size?: Sizes;
  space: Sizes;
}

const UnderlineSizes: Record<Sizes, number> = {
  xs: 3,
  s: 1,
  xm: 3,
  m: 2,
  l: 3,
};

const UnderlineSpace: Record<Sizes, number> = {
  xs: 3,
  s: 1,
  xm: 3,
  m: 10,
  l: 3,
};

export function Underline(props: React.PropsWithChildren<UnderlineProps>) {
  const { children, ...rest } = props;
  return (
    <UnderlineContainer>
      {children}
      <Line {...rest} />
    </UnderlineContainer>
  );
}

const UnderlineContainer = styled("span")`
  display: inline-flex;
  flex-flow: column;
`;

const Line = styled("span")<UnderlineProps>`
  display: inline-block;
  background: ${(props) => ColorsEnum[props.color]};
  margin-top: ${(props) => UnderlineSpace[props.space]}px;
  height: ${(props) =>
    props.size ? UnderlineSizes[props.size] : UnderlineSizes.s}px;
`;
