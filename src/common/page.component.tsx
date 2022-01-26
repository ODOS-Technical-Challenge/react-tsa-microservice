import React, { FunctionComponent, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Page: FunctionComponent<Props> = ({ children }: Props) => {
  return (
    <div
      style={{
        width: "720px",
        margin: "20px auto",
        padding: "15px",
        background: "white",
        border: "1px solid #ccc",
      }}
    >
      {children}
    </div>
  );
};
