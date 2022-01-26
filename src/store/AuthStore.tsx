import React, { FunctionComponent } from "react";
import { AuthContext } from "./contexts";

interface Props {
  children: React.ReactNode;
}

export const authProvider = {
  user: "",
  isAuthenticated: false,
  signin(callback: VoidFunction) {
    authProvider.isAuthenticated = true;
    setTimeout(callback, 100); // fake async
  },
  signout(callback: VoidFunction) {
    authProvider.isAuthenticated = false;
    setTimeout(callback, 100);
  },
};

export const AuthStore: FunctionComponent<Props> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = React.useState<string>("");

  const signin = (newUser: string, callback: VoidFunction) => {
    return authProvider.signin(() => {
      setUser(newUser);
      callback();
    });
  };

  const signout = (callback: VoidFunction) => {
    return authProvider.signout(() => {
      setUser("");
      callback();
    });
  };

  const value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
