import React from "react";
import styled from "styled-components";
import { UserContext } from "core/UserContext";
import { StorageContext } from "core/StorageContext";
import { Page } from "ui-kit/Page";
import { Menu } from "ui-kit/Menu";
import { SearchSection } from "ui-kit/SearchSection";
import { CarCard } from "ui-kit/CarCard";
import { Filters } from "./components/Filters";

export function PageDashboard() {
  const user = React.useContext(UserContext);
  const storage = React.useContext(StorageContext);

  return (
    <Page>
      <Menu userName={user.userName} />
      <SearchSection />

      <Content>
        <Filters />

        <CarsList>
          {storage.cars.map((c) => (
            <CarCard car={c} />
          ))}
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

  > * {
    margin-bottom: 16px;

    &:last-child {
      margin: 0;
    }
  }
`;
