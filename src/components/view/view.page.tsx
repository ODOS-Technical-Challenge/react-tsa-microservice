import React, { Fragment, FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import {
  FavoriteButton,
  IconButton,
  Page,
  Pane,
  SubHeader,
} from "../../common";
import {
  IconArrowBack,
  IconFavorite,
  IconFavoriteBorder,
  Title,
} from "@trussworks/react-uswds";
import { useAirport } from "../../hooks";
import { ROUTES } from "../../utils";
import { ChartHistory } from "../history/history.component";

/**
 * View a specific airport
 */
export const ViewPage: FunctionComponent = () => {
  const { id } = useParams();
  const { data, isLoading } = useAirport(id || "");

  return (
    <Fragment>
      <SubHeader />
      <Page isLoading={isLoading}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <IconButton
            href={ROUTES.Home.path}
            name="Back Button"
            icon={IconArrowBack}
          />
          <h2 style={{ marginLeft: "16px" }}>{data.name}</h2>
        </div>
        <div style={{ padding: "16px", backgroundColor: "#999" }}>
          <p>Address:</p>
          <p>
            {data.city}, {data.state}
          </p>
        </div>

        <Pane>
          <p>
            Wait time: {data.delayTimes?.minEstimatedWaitTime} to{" "}
            {data.delayTimes?.maxEstimatedWaitTime} mins
          </p>

          <p>
            Pre Check time: {data.delayTimes?.minEstimatedPrecheckTime} to{" "}
            {data.delayTimes?.maxEstimatedPrecheckTime} mins
          </p>
        </Pane>

        <ChartHistory code={data.shortcode} />
      </Page>
    </Fragment>
  );
};
