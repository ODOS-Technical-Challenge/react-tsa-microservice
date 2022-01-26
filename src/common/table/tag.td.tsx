import React, { FunctionComponent } from "react";
import { Tag } from "@trussworks/react-uswds";
import { TableDataProps } from "../../types";

/**
 * An component to render data within the Virtual Table
 * @returns Table Data
 */
export const TdTag: FunctionComponent<TableDataProps> = ({
  value,
}: TableDataProps) => {
  return (
    <td>
      <Tag>{value}</Tag>
    </td>
  );
};
