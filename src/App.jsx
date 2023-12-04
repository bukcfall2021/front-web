import React from "react";
import AppRouting from "./router/AppRouting";
import { Toaster } from "react-hot-toast";
import useOneSignal from "./hooks/useOneSignal";

const App = () => {
  useOneSignal();
  return (
    <>
      <Toaster />
      <AppRouting />
    </>
  );
};

export default App;
