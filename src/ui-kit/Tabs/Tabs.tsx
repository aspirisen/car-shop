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

  React.useEffect(() => setActiveTab(props.tabs[0]), [props.tabs]);

  const [styles, set] = useSpring(() => ({
    left: 0,
    width: 0,
  }));

  const onActivate = React.useCallback(
    (tab: TabInfo) => {
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
            set({ left: 0, width: 0, immediate: true });
            setActiveTab(tab);
          },
        });
      }
    },
    [activeTab, set, tabs]
  );

  return (
    <TabsContainer>
      {tabs.map(({ tab, ref }) => (
        <TabItemWrapper key={tab.caption}>
          <TabItem
            ref={ref}
            tab={tab}
            isActive={activeTab === tab}
            onActivate={onActivate}
          />

          <Line
            isHidden={activeTab !== tab}
            style={{
              ...styles,
              width: styles.width.interpolate((v) =>
                v === 0 ? "100%" : `${v}px`
              ),
            }}
          ></Line>
        </TabItemWrapper>
      ))}
    </TabsContainer>
  );
}

const TabsContainer = styled("div")`
  display: flex;
`;

const TabItemWrapper = styled("div")`
  position: relative;
  margin-right: 60px;
`;

const Line = styled(animated.div)<{ isHidden: boolean }>`
  position: absolute;
  visibility: ${(props) => (props.isHidden ? "hidden" : "visible")};
  height: 1px;
  width: 100%;
  background: #dddddd;
`;
