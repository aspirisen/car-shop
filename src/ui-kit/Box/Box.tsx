import styled, { css } from "styled-components";
import { Sizes } from "ui-kit/theme/sizes";

type Directions = "Left" | "Right" | "Top" | "Bottom";

export type BoxPadding =
  | { padding: Sizes }
  | { [P in Directions as `padding${P}`]?: Sizes };

export type BoxMargin =
  | { margin: Sizes }
  | { [P in Directions as `margin${P}`]?: Sizes };

export type BoxProps = BoxPadding & BoxMargin;

const BoxSizes: Record<Sizes, number> = {
  xs: 1,
  xm: 6,
  s: 8,
  m: 1,
  l: 24,
};

export const Box = styled("div")<BoxProps>`
  ${(props) =>
    "padding" in props
      ? css`
          padding: ${BoxSizes[props.padding]}px;
        `
      : css`
          padding-left: ${props.paddingLeft && BoxSizes[props.paddingLeft]}px;
          padding-right: ${props.paddingRight &&
          BoxSizes[props.paddingRight]}px;
          padding-top: ${props.paddingTop && BoxSizes[props.paddingTop]}px;
          padding-bottom: ${props.paddingBottom &&
          BoxSizes[props.paddingBottom]}px;
        `};

  ${(props) =>
    "margin" in props
      ? css`
          margin: ${BoxSizes[props.margin]}px;
        `
      : css`
          margin-left: ${props.marginLeft && BoxSizes[props.marginLeft]}px;
          margin-right: ${props.marginRight && BoxSizes[props.marginRight]}px;
          margin-top: ${props.marginTop && BoxSizes[props.marginTop]}px;
          margin-bottom: ${props.marginBottom &&
          BoxSizes[props.marginBottom]}px;
        `};
`;
