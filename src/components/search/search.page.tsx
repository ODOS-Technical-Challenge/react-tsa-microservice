import React, { Fragment, FunctionComponent } from "react";
import { useSearch } from "../../hooks";
import { Page, SubHeader, Search, TdTag, VirtualTable } from "../../common";
import { useNavigate, useSearchParams } from "react-router-dom";

const menu = [
  { title: "Username", path: "username" },
  { title: "First Name", path: "firstName" },
  { title: "Last Name", path: "lastName" },
  { title: "Role", path: "role", render: TdTag },
];

export const SearchPage: FunctionComponent = () => {
  const { data, fetch, isLoading } = useSearch();
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const search = params.get("search");

  return (
    <Fragment>
      <SubHeader />

      <Page>
        <div>
          <Search
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
