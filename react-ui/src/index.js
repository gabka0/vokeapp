import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import LandingPage from "views/Pages/LandingPage.js";
import AuthLayout from "layouts/Auth.js";
import AdminLayout from "layouts/Admin.js";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";

import { ProtectedRoute } from "./layouts/ProtectedRoute";
import { AuthProvider } from "auth-context/auth.context";
let user = localStorage.getItem("user");
user = JSON.parse(user);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <ChakraProvider theme={theme}>
    <AuthProvider userData={user}>
      <BrowserRouter>
        <Switch>
          <Route path={`/`} component={LandingPage} exact />
          <Route path={`/auth`} component={AuthLayout} />
          <ProtectedRoute path={`/dashboard`} component={AdminLayout} />
          <Redirect from={`/`} to="/dashboard/mentors" />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  </ChakraProvider>
);
