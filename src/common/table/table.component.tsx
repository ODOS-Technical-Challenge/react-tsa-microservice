import React, { FunctionComponent } from "react";
import { Table } from "@trussworks/react-uswds";
import { CenterPane, Loading } from "../index";
import { MenuType } from "../../types";

export interface Props<T = any> {
  menu: MenuType[];
  data: T[];

  isLoading: boolean;
}

export const VirtualTable: FunctionComponent<Props> = ({
  data,
  menu,
  isLoading,
}: Props) => {
  return (
    <Table bordered={false} fullWidth>
      <thead>
        <tr>
          {menu.map(({ title, path }) => (
            <th key={`table-heading-${path}`}>{title}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {isLoading && (
          <tr>
            <td style={{ border: "none" }} colSpan={4}>
              <CenterPane>
                <Loading />
              </CenterPane>
            </td>
          </tr>
        )}
        {data.map((each, index) => (
          <tr key={`table-row-${index}`}>
            {menu.map((row, i) => {
              const value = (each[row.path] as string) || row.default || "-";

              if (row.render) {
                const Component = row.render;
                return <Component key={`${row.path}-${i}`} value={value} />;
              } else {
                return <td key={`${row.path}-${i}`}>{value}</td>;
              }
            })}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
