import styled from "styled-components";
import { Colors, ColorsEnum } from "ui-kit/theme/colors";
import { Sizes } from "ui-kit/theme/sizes";

export interface TextBaseProps {
  size: Sizes;
  color?: Colors;
}

export type TextProps = ({ avenir: true } | { gordita: true }) & TextBaseProps;

const TextSizes: Record<Sizes, number> = {
  xs: 10,
  s: 12,
  m: 16,
};

export const Text = styled("span")<TextProps>`
  font-family: ${(props) => ("avenir" in props ? "Avenir" : "Gordita")};
  font-size: ${(props) => TextSizes[props.size]}px;
  color: ${(props) =>
    props.color ? ColorsEnum[props.color] : ColorsEnum.Black};
`;
