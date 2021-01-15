import { UserContextProvider } from "core/UserContext/UserContextProvider";
import { PageDashboard } from "page-dashboard";
import { Root } from "ui-kit/Root";

export function App() {
  return (
    <Root>
      <UserContextProvider>
        <PageDashboard />
      </UserContextProvider>
    </Root>
  );
}
