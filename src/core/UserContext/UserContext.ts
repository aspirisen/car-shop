import React from "react";

export interface UserContextProps {
  userName: string;
}

export const UserContext = React.createContext(
  (undefined as unknown) as UserContextProps
);
