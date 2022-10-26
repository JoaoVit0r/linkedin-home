import { Navigate, Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";

export function Router() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<Navigate to="/home"/>} />
    </Routes>
  );
}
