import styled, { css } from "styled-components";

export type ButtonKind = "link";

export interface ButtonProps {
  kind: ButtonKind;
}

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
          text-decoration: underline;
          text-underline-offset: 3px;

          &:focus,
          &:hover,
          &:active {
            opacity: 0.8
          }
        `;
    }
  }}
`;
