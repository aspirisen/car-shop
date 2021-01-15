import type React from "react";
import styled from "styled-components";

export function Page(props: React.PropsWithChildren<{}>) {
  return <PageContainer>{props.children}</PageContainer>;
}

const PageContainer = styled("div")`
  background-color: #f4f5f6;
  height: 100%;
`;
