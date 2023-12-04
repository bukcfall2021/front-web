import React from "react";
import AppRouting from "./router/AppRouting";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Toaster />
      <AppRouting />
    </>
  );
};

export default App;
