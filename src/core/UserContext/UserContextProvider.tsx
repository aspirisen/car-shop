import React from "react";
import { UserContext } from "./UserContext";

export function UserContextProvider(props: React.PropsWithChildren<{}>) {
  const value = React.useMemo(() => ({ userName: "James" }), []);

  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
}
