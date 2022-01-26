import React, { Fragment, FunctionComponent } from "react";
import { Page, SubHeader, Search, VirtualTable } from "../../common";
import { useNavigate, useSearchParams } from "react-router-dom";

import { useAirport } from "../../hooks";

const menu = [
  { title: "Airport", path: "name" },
  { title: "City", path: "city" },
  { title: "State", path: "state" },
];

export const SearchPage: FunctionComponent = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const search = params.get("search");
  const { data, fetch, isLoading } = useAirport(search || "");

  return (
    <Fragment>
      <SubHeader />

      <Page>
        <div>
          <Search
            placeholder="Search by airport name, abbreviation, or location"
            value={search || ""}
            onClick={(value) => {
              fetch(value);
              navigate({
                search: `?search=${value}`,
              });
            }}
          />
        </div>

        <VirtualTable {...{ menu, isLoading, data }} />
      </Page>
    </Fragment>
  );
};
