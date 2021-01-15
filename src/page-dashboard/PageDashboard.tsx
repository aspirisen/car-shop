import React from "react";
import { UserContext } from "core/UserContext";
import { Page } from "ui-kit/Page";
import { Menu } from "ui-kit/Menu";

export function PageDashboard() {
  const user = React.useContext(UserContext);

  return (
    <Page>
      <Menu userName={user.userName} />
    </Page>
  );
}
