import { Navigate, Outlet, Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { Dnd } from "./pages/Dnd";
import { getCookie } from "./utils/cookies";

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
  const userCanSee = getCookie("token") || localStorage.getItem("token");
  if (!userCanSee) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ?? <Outlet />;
};
