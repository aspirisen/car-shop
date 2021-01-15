import React from "react";
import styled from "styled-components";

export interface UnderlineProps {}

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
  display: inline-block;
`;

const Line = styled("span")<UnderlineProps>`
  display: inline-block;
  background: #008cdd;
  height: 1px;
  width: 100%;
`;
