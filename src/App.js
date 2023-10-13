import React from "react";
import SomeComponent from "./components/SomeComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Name from "./components/Name";
import Sidebar from "./components/Sidebar";
import MUITable from "./pages/MUITable";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SomeComponent />} />
          <Route path="/name" element={<Name />} />
          <Route path="/mui" element={<MUITable />} />
        </Routes>
      </BrowserRouter>
      {/* <Sidebar /> */}
    </div>
  );
};

export default App;
