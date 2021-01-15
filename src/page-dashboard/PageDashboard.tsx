import React from "react";
import styled from "styled-components";
import { UserContext } from "core/UserContext";
import { Page } from "ui-kit/Page";
import { Menu } from "ui-kit/Menu";
import { Text } from "ui-kit/Text";
import { Slider } from "ui-kit/Slider";
import { Checkbox } from "ui-kit/Checkbox";
import { SearchSection } from "ui-kit/SearchSection";
import { Car } from "ui-kit/Car";

export function PageDashboard() {
  const user = React.useContext(UserContext);

  return (
    <Page>
      <Menu userName={user.userName} />
      <SearchSection />

      <Content>
        <div>
          <Text gordita size="s">
            Filters
          </Text>
          <Checkbox caption="Free" />
          <Checkbox caption="Cool" />
          <Checkbox caption="Fun" />
          <Checkbox caption="Sexy" />

          <Text gordita size="s">
            People dig it
          </Text>
          <Slider />

          <Text gordita size="s">
            Helps me with job search
          </Text>
          <Slider />
        </div>

        <div style={{ width: "100%" }}>
          <Car />
        </div>
      </Content>
    </Page>
  );
}

const Content = styled("div")`
  display: flex;
  max-width: 1024px;
  margin: 0 auto;
`;
