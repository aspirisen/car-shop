import React from "react";
import styled from "styled-components";
import { animated } from "react-spring";
import { Colors, ColorsEnum } from "ui-kit/theme/colors";
import { Sizes } from "ui-kit/theme/sizes";

export interface UnderlineProps {
  color: Colors;
  size?: Sizes;
  space: Sizes;
  hideLine?: boolean;
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
  position: relative;
  display: inline-flex;
  flex-flow: column;
`;

const Line = styled(animated.span)<UnderlineProps>`
  display: inline-block;
  position: absolute;
  width: 100%;
  bottom: 0;
  background: ${(props) => ColorsEnum[props.color]};
  bottom: ${(props) => -UnderlineSpace[props.space]}px;
  height: ${(props) =>
    props.size ? UnderlineSizes[props.size] : UnderlineSizes.s}px;
`;
