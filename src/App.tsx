import React from "react";
import { UserContextProvider } from "core/UserContext/UserContextProvider";
import { StorageContextProvider } from "core/StorageContext/StorageContextProvider";
import { PageDashboard } from "page-dashboard";
import { Root } from "ui-kit/Root";

export function App() {
  return (
    <Root>
      <UserContextProvider>
        <StorageContextProvider>
          <PageDashboard />
        </StorageContextProvider>
      </UserContextProvider>
    </Root>
  );
}
