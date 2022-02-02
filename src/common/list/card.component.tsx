import React, { Fragment, FunctionComponent } from "react";
import {
  Card,
  CardBody,
  CardGroup,
  CardHeader,
  CardMedia,
  IconLink,
} from "@trussworks/react-uswds";
import { CenterPane, Loading } from "../index";
import { ROUTES, structureRoute } from "../../utils";

export interface Props<T = any> {
  data: T[];
  isLoading: boolean;
}

export const VirtualCards: FunctionComponent<Props> = ({
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
      <CardGroup style={{ width: "50vw", margin: "0 auto" }}>
        {data.map((row, i) => {
          const link = structureRoute(ROUTES.View, { id: `${i}` });
          return (
            <Card
              key={`${row.path}-${i}`}
              layout="flagDefault"
              className="airport-card"
              headerFirst
              gridLayout={{ tablet: { col: 12 } }}
            >
              <CardHeader>
                <a href={link} className="usa-card__heading">
                  {row.name}
                </a>
                <a href={link}>
                  <IconLink height={32} />
                </a>
              </CardHeader>
              <CardMedia>
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "50%",
                    background: "#BC0030",
                    color: "white",
                    fontWeight: "600",
                    fontSize: "1.5rem",
                    textTransform: "uppercase",
                    margin: "15px 0 0 15px",
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
