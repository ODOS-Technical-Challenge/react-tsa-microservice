import React, { Fragment, FunctionComponent } from "react";
import { Page, SubHeader, VirtualCards } from "../../common";
import { useNavigate, useSearchParams } from "react-router-dom";

import { Search } from "@trussworks/react-uswds";
import { useFavorites } from "../../hooks/favorites.hook";
import { useSelected } from "../../hooks/selected.hook";

export const FavoritesPage: FunctionComponent = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const search = params.get("search");
  const { favorites, fetch, addFavorites } = useFavorites(search || "");
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
          <h3>Favorites</h3>
        </div>
        <div>
          <Search
            placeholder={"Search by airport name, abbriviation or location"}
            size="small"
            onSubmit={onSubmit}
          />
        </div>
      </Page>
      <VirtualCards
        data={favorites}
        isLoading={false}
        favorites={favorites}
        addFavorites={addFavorites}
        selected={selected}
        addSelected={addSelected}
      />
    </Fragment>
  );
};
