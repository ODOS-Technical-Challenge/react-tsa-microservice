import React, { FunctionComponent } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AppStore, AuthStore } from "../store";
import { Header } from "../common";
import { ROUTES } from "../utils";

import "./App.css";

import { LoginPage, SearchPage } from "../components";
import { ViewPage } from "../components/view/view.page";

export const App: FunctionComponent = () => {
  return (
    <div className="App">
      <AppStore>
        <Header />
        <AuthStore>
          <Routes>
            <Route {...ROUTES.Login} element={<LoginPage />} />
            <Route
              {...ROUTES.Home}
              element={
                <SearchPage />
                // <RequireAuth>
                // </RequireAuth>
              }
            />
            <Route {...ROUTES.View} element={<ViewPage />} />

            {/** Fallback Redirect / Default Page */}
            <Route path="" element={<Navigate to={ROUTES.Home.path} />} />
          </Routes>
        </AuthStore>
      </AppStore>
    </div>
  );
};
