import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layouts from "../layouts/Layouts";
import BasePages from "./BasePages";
import Login from "../modules/components/Authentification/Login/Login";

export default function AppRoute() {
  return (
    <Routes>
      <Route index element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="*"
        element={
          <Layouts>
            <BasePages />
          </Layouts>
        }
      />
    </Routes>
  );
}
