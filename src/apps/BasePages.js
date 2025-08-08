import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../modules/components/Home/Home";
import Silsilah from "../modules/components/Silsilah/Silsilah";
import Album from "../modules/components/Album/Album";
import Login from "../modules/components/Authentification/Login/Login";
import Error404 from "../layouts/error-404/Error-404";

export default function BasePages() {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="login" element={<Login />} />
      <Route path="home" element={<Home />} />
      <Route path="album" element={<Album />} />
      <Route path="silsilah" element={<Silsilah />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}
