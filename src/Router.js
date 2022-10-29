import { Navigate, Outlet, Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { JobList } from "./pages/JobList";

export function Router() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" components={<PrivateRoute />}>
        <Route path="job-list" element={<JobList />} />
      </Route>
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
}

const PrivateRoute = ({
  children,
  redirectPath = "/home",
}) => {
  const userCanSee = localStorage.getItem("token");
  if (!userCanSee) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ?? <Outlet />;
};
