import React, { Fragment, FunctionComponent } from "react";
import {
  Card,
  CardBody,
  CardGroup,
  CardHeader,
  CardMedia,
} from "@trussworks/react-uswds";
import { CenterPane, Loading } from "../index";
import { MenuType } from "../../types";

export interface Props<T = any> {
  menu: MenuType[];
  data: T[];

  isLoading: boolean;
}

export const VirtualTable: FunctionComponent<Props> = ({
  data,
  isLoading,
}: Props) => {
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
  );
};
