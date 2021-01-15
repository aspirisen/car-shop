import type React from "react";
import styled from "styled-components";
import { Colors, ColorsEnum } from "ui-kit/theme/colors";
import { Sizes } from "ui-kit/theme/sizes";

export interface TextBaseProps {
  size: Sizes;
  color?: Colors;
  weight?: React.CSSProperties["fontWeight"];
}

export type TextProps = ({ avenir: true } | { gordita: true }) & TextBaseProps;

const TextSizes: Record<Sizes, number> = {
  xs: 10,
  s: 12,
  xm: 14,
  m: 16,
  l: 18
};

export const Text = styled("span")<TextProps>`
  font-family: ${(props) => ("avenir" in props ? "Avenir" : "Gordita")};
  font-size: ${(props) => TextSizes[props.size]}px;
  font-weight: ${(props) => props.weight};
  color: ${(props) =>
    props.color ? ColorsEnum[props.color] : ColorsEnum.Black};
`;
