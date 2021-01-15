import styled from "styled-components";
import { Sizes } from "ui-kit/theme/sizes";

export interface TextBaseProps {
  size: Sizes;
}

export type TextProps = ({ avenir: true } | { gorditas: true }) & TextBaseProps;

const TextSizes: Record<Sizes, number> = {
  xs: 10,
  s: 12,
};

export const Text = styled("span")<TextProps>`
  font-family: ${(props) => ("avenir" in props ? "Avenir" : "Gorditas")};
  font-size: ${(props) => TextSizes[props.size]}px;
`;
