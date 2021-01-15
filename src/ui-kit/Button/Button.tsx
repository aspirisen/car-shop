import styled, { css } from "styled-components";

export interface ButtonLink {
  kind: "link";
  underline?: boolean;
}

export interface ButtonPlain {
  kind: "plain";
  big?: boolean;
}

export type ButtonProps = ButtonLink | ButtonPlain;

export const Button = styled("button")<ButtonProps>`
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;

  ${(props) => {
    switch (props.kind) {
      case "link":
        return css`
          color: #008cdd;
          ${props.underline &&
          css`
            text-decoration: underline;
            text-underline-offset: 3px;
          `};

          &:focus,
          &:hover,
          &:active {
            opacity: 0.8;
          }
        `;

      case "plain":
        return css`
          border: solid 1px #dddddd;
          background-color: #003554;

          ${props.big &&
          css`
            padding: 50px;
          `};

          &:hover {
            > * {
              opacity: 0.5;
            }
          }
        `;
    }
  }}
`;
