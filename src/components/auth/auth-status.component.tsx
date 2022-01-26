import React, { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../store/contexts";

export const AuthStatus: FunctionComponent = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  if (!auth.user) {
    return <p>You are not logged in.</p>;
  }

  const signOut = () => {
    auth.signout(() => navigate("/"));
  };

  return (
    <p>
      Welcome {auth.user}! <button onClick={signOut}>Sign out</button>
    </p>
  );
};
