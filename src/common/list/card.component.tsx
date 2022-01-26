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

export const VirtualCards: FunctionComponent<Props> = ({
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
              <CardHeader>
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
                  {row.code}
                </div>
              </CardMedia>
              <CardBody>
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
