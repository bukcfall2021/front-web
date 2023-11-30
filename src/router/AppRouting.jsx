import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/home";
import Navbar from "../components/Navbar";

const AppRouting = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouting;
