import { FC } from "react";

export interface MenuType {
  title: string;
  path: string;

  default?: string;
  render?: FC<TableDataProps>;
}

export interface TableDataProps {
  value: string;
}
