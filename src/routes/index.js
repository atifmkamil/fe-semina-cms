import { Navigate, Route, Routes } from "react-router-dom";
import GuardRoute from "../components/GuardRoute";
import GuestOnlyRoute from "../components/GuestOnlyRoute";

import Signin from "../pages/signin";
import SNavbar from "../components/Navbar";
import { HomeRoute } from "./HomeRoute";
import { CategoriesRoute } from "./CategoriesRoute";
import { TalentsRoute } from "./TalentsRoute";

export function AppRoutes() {
  return (
    <Routes>
      <Route
        path="signin"
        element={
          <GuestOnlyRoute>
            <Signin />
          </GuestOnlyRoute>
        }
      />
      <Route
        path="/"
        element={
          <>
            <SNavbar />
            <GuardRoute />
          </>
        }
      >
        <Route path="dashboard/*" element={<HomeRoute />} />
        <Route path="categories/*" element={<CategoriesRoute />} />
        <Route path="talents/*" element={<TalentsRoute />} />
        <Route path="" element={<Navigate to="/dashboard" replace={true} />} />
      </Route>
    </Routes>
  );
}
