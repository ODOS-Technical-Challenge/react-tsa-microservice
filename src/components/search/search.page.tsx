import React, { Fragment, FunctionComponent } from "react";
import { useSearch } from "../../hooks";
import { Page, SubHeader, Search, VirtualTable } from "../../common";
import { useNavigate } from "react-router-dom";

const menu = [
  { title: "Airport", path: "name" },
  { title: "City", path: "city" },
  { title: "State", path: "state" },
];

export const SearchPage: FunctionComponent = () => {
  const { data, fetch, isLoading } = useSearch();
  const navigate = useNavigate();

  return (
    <Fragment>
      <SubHeader />

      <Page>
        <div>
          <Search
            placeholder="Search by airport name, abbreviation, or location"
            value={""}
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
