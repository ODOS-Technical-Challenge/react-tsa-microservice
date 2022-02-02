import React, { Fragment, FunctionComponent } from "react";
import { Page, SubHeader, VirtualCards } from "../../common";
import { useNavigate, useSearchParams } from "react-router-dom";

import { Search } from "@trussworks/react-uswds";
import { useFavorites } from "../../hooks/favorites.hook";

export const FavoritesPage: FunctionComponent = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const search = params.get("search");
  const { data, fetch } = useFavorites(search || "");

  const onSubmit = (value: any) => {
    fetch(value);
    navigate({
      search: `?search=${value}`,
    });
  };

  return (
    <Fragment>
      <SubHeader />

      <Page>
        <div>
          <h3>Favorites</h3>
        </div>
        <div>
          <Search
            placeholder="Search by airport name, abbriviation or location"
            size="small"
            onSubmit={onSubmit}
          />
        </div>
      </Page>
      <VirtualCards data={data} isLoading={false} />
    </Fragment>
  );
};
