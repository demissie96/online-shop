import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="add-cafe" element={<Shop />} />
          <Route path="edit-cafe/*" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    );
  }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
