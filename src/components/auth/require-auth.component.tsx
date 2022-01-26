import React, { FunctionComponent } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../store/contexts";

interface Props {
  children: JSX.Element;
}

export const RequireAuth: FunctionComponent<Props> = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const auth = useAuth();
  const location = useLocation();
  console.log(auth);
  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};
