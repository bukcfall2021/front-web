import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/home";
import Navbar from "../components/Navbar";
import Menu from "../pages/Menu/Menu";

const AppRouting = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/Menu" element={<Menu/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouting;
