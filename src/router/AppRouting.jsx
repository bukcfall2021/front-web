import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/auth/login";
import SignupPage from "../pages/auth/signup";
import RouteNames from "./RouteNames";
import HomePage from "../pages/home";

const AppRouting = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />

        <Route path={RouteNames.LOG_IN} element={<LoginPage />} />
        <Route path={RouteNames.SIGN_UP} element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouting;
