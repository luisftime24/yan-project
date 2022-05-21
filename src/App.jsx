import React from "react";
import AppProvider from "./context/AppProvider";
import AppRouter from "./routers/AppRouter";

const App = () => {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider >
  );
};

export default App;
