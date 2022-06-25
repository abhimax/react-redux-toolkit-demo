import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/main";
import Counter from "./pages/counter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Main />} exact />
        <Route path="/count" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
