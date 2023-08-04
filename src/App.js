import React from "react";
import SomeComponent from "./components/SomeComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Name from "./components/Name";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SomeComponent />} />
          <Route path="/name" element={<Name />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
