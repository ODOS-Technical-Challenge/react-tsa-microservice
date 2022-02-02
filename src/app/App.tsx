import React, { FunctionComponent } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AppStore } from "../store";
import { Header } from "../common";
import { ROUTES } from "../utils";

import "./App.css";

import { SearchPage } from "../components";
import { ViewPage } from "../components/view/view.page";
import { FavoritesPage } from "../components/favorites/favorites.page";

export const App: FunctionComponent = () => {
  return (
    <div className="App">
      <AppStore>
        <Header />
        <Routes>
          <Route {...ROUTES.Home} element={<SearchPage />} />
          <Route {...ROUTES.View} element={<ViewPage />} />
          <Route {...ROUTES.Favorites} element={<FavoritesPage />} />

          {/** Fallback Redirect / Default Page */}
          <Route path="" element={<Navigate to={ROUTES.Home.path} />} />
        </Routes>
      </AppStore>
    </div>
  );
};
