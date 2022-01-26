import React, { FunctionComponent, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Page: FunctionComponent<Props> = ({ children }: Props) => {
  return (
    <div style={{ width: "720px", margin: "0px auto", paddingTop: "16px" }}>
      {children}
    </div>
  );
};
