import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Approuter from "./common/Approuter";
function App() {
  const router = createBrowserRouter(Approuter);
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
