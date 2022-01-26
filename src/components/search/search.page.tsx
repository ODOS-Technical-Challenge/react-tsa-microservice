import React, { Fragment, FunctionComponent } from "react";
import { Page, SubHeader, VirtualTable } from "../../common";
import { useNavigate, useSearchParams } from "react-router-dom";

import { useAirport } from "../../hooks";
import { Search } from "@trussworks/react-uswds";

export const SearchPage: FunctionComponent = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const search = params.get("search");
  const { data, fetch, isLoading } = useAirport(search || "");

  const onSubmit = (value: any) => {
    fetch(value);
    console.log(value);
    navigate({
      search: `?search=${value}`,
    });
  };

  return (
    <Fragment>
      <SubHeader />

      <Page>
        <div>
          <h3>Welcome to MyTSA</h3>
          <p>A way to help your trip to the airport be more efficient.</p>
        </div>
        <div>
          <Search
            placeholder="Search by airport name, abbriviation or location"
            size="small"
            onSubmit={onSubmit}
          />
        </div>
      </Page>
      <VirtualTable {...{ isLoading, data }} />
    </Fragment>
  );
};
