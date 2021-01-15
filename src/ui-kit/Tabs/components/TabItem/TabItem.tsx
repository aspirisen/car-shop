import React from "react";
import styled from "styled-components";
import { Text } from "ui-kit/Text";

export interface TabInfo {
  caption: string;
}

export interface TabItemProps {
  tab: TabInfo;
  isActive: boolean;
  onActivate: (tab: TabInfo, ref: any) => void;
}

export const TabItem = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<TabItemProps>
>((props, ref) => {
  return (
    <TabItemContainer
      onClick={() => props.onActivate(props.tab, ref)}
      ref={ref}
    >
      <TabCaption gordita size="m" weight={500} color="GrayDark">
        {props.tab.caption}
      </TabCaption>
    </TabItemContainer>
  );
});

const TabItemContainer = styled("div")`
  cursor: pointer;
  position: relative;
`;

const TabCaption = styled(Text)`
  padding: 0 5px;
`;
