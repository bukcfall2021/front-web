import { BrowserRouter, Route, Routes, Navigate, Outlet } from "react-router-dom";
import LoginPage from "../pages/auth/login";
import SignupPage from "../pages/auth/signup";
import RouteNames from "./RouteNames";
import HomePage from "../pages/home";
import MenuPage from "../pages/Menu/Menu";
import { useState } from "react";

const AppRouting = () => {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        {/* Auth Pages */}
        <Route path="/" element={user ? <Navigate to={RouteNames.MENU} /> : <Outlet />}>
          <Route path={RouteNames.LOG_IN} element={<LoginPage />} />
          <Route path={RouteNames.SIGN_UP} element={<SignupPage />} />
        </Route>
        {/* LoggedIn pages */}

        {/* Restaurant Pages  */}
        <Route path={RouteNames.MENU} element={<MenuPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouting;
