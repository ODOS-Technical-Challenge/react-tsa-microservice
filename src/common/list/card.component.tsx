import React, { Fragment, FunctionComponent } from "react";
import {
  Card,
  CardBody,
  CardGroup,
  CardHeader,
  CardMedia,
  IconFavorite,
  IconFavoriteBorder,
  IconLink,
} from "@trussworks/react-uswds";
import { CenterPane, IconButton, Loading } from "../index";
import { ROUTES, structureRoute } from "../../utils";
import { ChartHistory } from "../../components/history/history.component";

export interface Props<T = any> {
  data: T[];
  favorites?: T[];
  selected?: T[];
  isLoading?: boolean;
  addFavorites?: any;
  addSelected?: any;
}

export const VirtualCards: FunctionComponent<Props> = ({
  data,
  favorites,
  selected,
  isLoading,
  addFavorites,
  addSelected,
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
          const link = structureRoute(ROUTES.View, { id: `${i}` });
          return (
            <Card
              key={`${row.path}-${i}`}
              layout="flagDefault"
              className={`airport-card ${
                selected?.find((x) => x.name === row.name) && "selected"
              }`}
              headerFirst
              gridLayout={{ tablet: { col: 12 } }}
              onClick={() => addSelected(row)}
            >
              <CardHeader>
                <a href={link} className="usa-card__heading">
                  {row.name}
                </a>
                <a href={link}>
                  <IconLink height={32} />
                </a>
                {selected?.find((x) => x.name === row.name) && (
                  <div style={{ float: "right" }}>
                    <IconButton
                      name="favorite"
                      onClick={() => addFavorites(row)}
                      icon={
                        favorites?.find((x) => x.name === row.name)
                          ? IconFavorite
                          : IconFavoriteBorder
                      }
                      appearance="muted"
                    />
                  </div>
                )}
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
              <CardBody>
                {row.city}, {row.state}
                {selected?.find((x) => x.name === row.name) && (
                  <ChartHistory code={row.shortcode} />
                )}
              </CardBody>
            </Card>
          );
        })}
      </CardGroup>
    </Fragment>
  );
};
