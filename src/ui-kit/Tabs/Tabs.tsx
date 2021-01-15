import styled from "styled-components";

export interface Tab {
  caption: string;
}

export interface TabsProps {
  tabs: Tab[];
}

export function Tabs(props: TabsProps) {
  return (
    <TabsContainer>
      {props.tabs.map((t) => (
        <TabItem>{t.caption}</TabItem>
      ))}
    </TabsContainer>
  );
}

const TabsContainer = styled("div")`
  display: flex;
`;

const TabItem = styled("div")`
  font-family: Gordita;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.19px;
  color: #393939;
  text-decoration: underline;
  margin-right: 60px;
`;
