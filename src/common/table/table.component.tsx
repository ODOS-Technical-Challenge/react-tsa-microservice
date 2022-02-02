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
              <CardMedia
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div>{row.shortcode}</div>
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
