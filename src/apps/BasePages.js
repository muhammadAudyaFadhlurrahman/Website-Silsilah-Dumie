import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../modules/components/Home/Home";
import Silsilah from "../modules/components/Silsilah/Silsilah";
import Album from "../modules/components/Album/Album";

export default function BasePages() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="album" element={<Album />} />
      <Route path="silsilah" element={<Silsilah />} />
    </Routes>
  );
}
