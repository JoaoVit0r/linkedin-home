import { Navigate, Outlet, Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { Dnd } from "./pages/Dnd";

export function Router() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/app/" element={<PrivateRoute />}>
        <Route path="dnd-list" element={<Dnd />} />
      </Route>
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
}

const PrivateRoute = ({ children, redirectPath = "/home" }) => {
  const userCanSee = localStorage.getItem("token");
  if (!userCanSee) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ?? <Outlet />;
};
