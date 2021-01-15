import React from "react";
import styled from "styled-components";
import { UserContext } from "core/UserContext";
import { Page } from "ui-kit/Page";
import { Menu } from "ui-kit/Menu";
import { SearchSection } from "ui-kit/SearchSection";
import { Car } from "ui-kit/Car";
import { Filters } from "./components/Filters";

export function PageDashboard() {
  const user = React.useContext(UserContext);

  return (
    <Page>
      <Menu userName={user.userName} />
      <SearchSection />

      <Content>
        <Filters />

        <CarsList>
          <Car />
        </CarsList>
      </Content>
    </Page>
  );
}

const Content = styled("div")`
  display: flex;
  max-width: 1024px;
  margin: 0 auto;
  padding: 26px 0;
  min-width: 0;
`;

const CarsList = styled("div")`
  min-width: 0;
`;
