import React, { FunctionComponent } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AppStore, AuthStore } from "../store";
import { Header } from "../common";
import { ROUTES } from "../utils";

import "./App.css";

import { LoginPage, SearchPage, RequireAuth } from "../components";

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
                <RequireAuth>
                  <SearchPage />
                </RequireAuth>
              }
            />

            {/** Fallback Redirect / Default Page */}
            <Route path="" element={<Navigate to={ROUTES.Home.path} />} />
          </Routes>
        </AuthStore>
      </AppStore>
    </div>
  );
};
