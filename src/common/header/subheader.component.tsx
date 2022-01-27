import React, { FunctionComponent, ReactNode } from "react";
import { Header } from "@trussworks/react-uswds";
import logo from "../../assets/logo.png";
import { ROUTES } from "../../utils";

interface Props {
  children?: ReactNode;
}

export const SubHeader: FunctionComponent<Props> = ({ children }: Props) => {
  return (
    <Header
      style={{
        boxShadow:
          "0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08)",
      }}
    >
      <div className="usa-nav-container">
        <div className="usa-navbar">
          <a href={ROUTES.Home.path}>
            <img height={32} src={logo} alt="logo" style={{ margin: "16px" }} />
          </a>
        </div>
        {children}
      </div>
    </Header>
  );
};
