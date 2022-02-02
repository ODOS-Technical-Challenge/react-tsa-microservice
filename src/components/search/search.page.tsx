import React, { Fragment, FunctionComponent } from "react";
import { Page, SubHeader, VirtualCards } from "../../common";
import { useNavigate, useSearchParams } from "react-router-dom";

import { useAirports } from "../../hooks";
import { Search } from "@trussworks/react-uswds";
import { useFavorites } from "../../hooks/favorites.hook";
import { useSelected } from "../../hooks/selected.hook";

export const SearchPage: FunctionComponent = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const search = params.get("search");
  const { data, fetch, isLoading } = useAirports(search || "");
  const { favorites, addFavorites } = useFavorites();
  const { selected, addSelected } = useSelected();

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
          <h3>Welcome to MyTSA</h3>
          <p>A way to help your trip to the airport be more efficient.</p>
        </div>
        <div>
          <Search
            placeholder="Search by airport name, abbreviation or location"
            size="small"
            onSubmit={onSubmit}
          />
        </div>
      </Page>
      <VirtualCards
        {...{ isLoading, data, favorites, addFavorites, selected, addSelected }}
      />
    </Fragment>
  );
};
