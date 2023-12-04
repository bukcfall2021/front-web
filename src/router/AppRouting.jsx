import { BrowserRouter, Route, Routes, Navigate, Outlet } from "react-router-dom";
import LoginPage from "../pages/auth/login";
import SignupPage from "../pages/auth/signup";
import RouteNames from "./RouteNames";
import HomePage from "../pages/home";
import MenuPage from "../pages/menu";
import { useState } from "react";
import AppLayout from "../layout/AppLayout";

const AppRouting = () => {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={RouteNames.MENU + "/*"} />} />

        {/* Auth Pages */}
        <Route path="/" element={user ? <Navigate to={RouteNames.MENU} /> : <Outlet />}>
          <Route path={RouteNames.LOG_IN} element={<LoginPage />} />
          <Route path={RouteNames.SIGN_UP} element={<SignupPage />} />
        </Route>
        {/* LoggedIn pages */}

        {/* Restaurant Pages  */}
        <Route path="/" element={<AppLayout />}>
          <Route path={RouteNames.HOME} element={<HomePage />} />
          <Route path={`${RouteNames.MENU}/:id`} element={<MenuPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouting;
