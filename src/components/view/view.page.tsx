import React, { Fragment, FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import { IconButton, Page, Pane, SubHeader } from "../../common";
import { IconArrowBack, Title } from "@trussworks/react-uswds";
import { useAirport } from "../../hooks";
import { ROUTES } from "../../utils";

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
          <Title style={{ marginLeft: "16px" }}>{data.airport}</Title>
        </div>
        <p>
          {data.city}, {data.state}
        </p>

        <Pane>
          <p>Wait time: {data.times}</p>
        </Pane>
      </Page>
    </Fragment>
  );
};
