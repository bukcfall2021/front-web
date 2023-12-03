import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "../pages/SignupLogin/Signup";
import Login from "../pages/SignupLogin/Login";

const AppRouting = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/Menu" element={<Menu/>} />
        <Route exact path="/Signup" element={<Signup/>} />
        <Route exact path="/Login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouting;
