import React from "react";
import styled from "styled-components";
import { animated, useSpring } from "react-spring";

import { TabItem, TabInfo } from "./components/TabItem";

export interface TabsProps {
  tabs: TabInfo[];
}

export function Tabs(props: TabsProps) {
  const tabs = React.useMemo(
    () =>
      props.tabs.map((tab) => ({
        tab,
        ref: React.createRef<HTMLDivElement>(),
      })),
    [props.tabs]
  );

  const [activeTab, setActiveTab] = React.useState(props.tabs[0]);

  const [styles, set] = useSpring(() => ({
    left: 0,
    width: 0,
  }));

  return (
    <TabsContainer>
      {tabs.map(({ tab, ref }) => (
        <div
          style={{ position: "relative", marginRight: 60 }}
          key={tab.caption}
        >
          <TabItem
            ref={ref}
            tab={tab}
            isActive={activeTab === tab}
            onActivate={(tab) => {
              const activeTabRef = tabs.find((t) => t.tab === activeTab)?.ref;
              const rectActive = activeTabRef?.current?.getBoundingClientRect();
              const nextTab = tabs.find((t) => t.tab === tab);
              const rectNext = nextTab?.ref.current?.getBoundingClientRect();

              if (rectNext && rectActive) {
                set({
                  left: rectNext.left - rectActive.left,
                  width: rectNext.width,
                  immediate: false,
                  onRest: () => {
                    set({ left: 0, immediate: true });
                    setActiveTab(tab);
                  },
                });
              }
            }}
          />

          <Line
            style={{
              ...styles,
              width: styles.width.interpolate((v) =>
                v === 0 ? "100%" : `${v}px`
              ),
            }}
            hidden={activeTab !== tab}
          ></Line>
        </div>
      ))}
    </TabsContainer>
  );
}

const TabsContainer = styled("div")`
  display: flex;
`;

const Line = styled(animated.div)<{ hidden: boolean }>`
  position: absolute;
  visibility: ${(props) => (props.hidden ? "hidden" : "visible")};
  height: 1px;
  width: 100%;
  background: #dddddd;
`;
