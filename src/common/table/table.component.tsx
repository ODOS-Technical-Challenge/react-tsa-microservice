import React, { Fragment, FunctionComponent } from "react";
import {
  Card,
  CardBody,
  CardGroup,
  CardHeader,
  CardMedia,
} from "@trussworks/react-uswds";
import { CenterPane, Loading } from "../index";

export interface Props<T = any> {
  data: T[];
  isLoading: boolean;
}

export const VirtualTable: FunctionComponent<Props> = ({
  data,
  isLoading,
}: Props) => {
  console.log(data);
  return (
    <Fragment>
      {isLoading && (
        <CenterPane>
          <Loading />
        </CenterPane>
      )}
      <CardGroup style={{ width: "740px", margin: "0 auto" }}>
        {data.map((row, i) => {
          return (
            <Card
              key={`${row.path}-${i}`}
              layout="flagDefault"
              headerFirst
              gridLayout={{ tablet: { col: 12 } }}
            >
              <CardHeader style={{ marginLeft: "5rem" }}>
                <h3 className="usa-card__heading">{row.name}</h3>
              </CardHeader>
              <CardMedia>
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {row.shortcode}
                </div>
              </CardMedia>
              <CardBody style={{ marginLeft: "5rem" }}>
                <div>
                  {row.city}, {row.state}
                </div>
              </CardBody>
            </Card>
          );
        })}
      </CardGroup>
    </Fragment>

    // <Table bordered={false} fullWidth>
    //   <thead>
    //     <tr>
    //       {menu.map(({ title, path }) => (
    //         <th key={`table-heading-${path}`}>{title}</th>
    //       ))}
    //     </tr>
    //   </thead>

    //   <tbody>
    //     {isLoading && (
    //       <tr>
    //         <td style={{ border: "none" }} colSpan={4}>
    //           <CenterPane>
    //             <Loading />
    //           </CenterPane>
    //         </td>
    //       </tr>
    //     )}
    //     {data.map((each, index) => (
    //       <tr key={`table-row-${index}`}>
    //         {menu.map((row, i) => {
    //           const value = (each[row.path] as string) || row.default || "-";

    //           if (row.render) {
    //             const Component = row.render;
    //             return <Component key={`${row.path}-${i}`} value={value} />;
    //           } else {
    //             return <td key={`${row.path}-${i}`}>{value}</td>;
    //           }
    //         })}
    //       </tr>
    //     ))}
    //   </tbody>
    // </Table>
  );
};
