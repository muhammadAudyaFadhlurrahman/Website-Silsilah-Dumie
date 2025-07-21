import React, { useState } from "react";
import Navigasi from "./widget/Navigasi";
import AlbumFoto from "./widget/AlbumFoto";

function Album() {
  const [keluargaDipilih, setKeluargaDipilih] = useState("");

  return (
    <div className="container d-flex flex-column flex-md-row gap-4">
      <Navigasi onSelect={setKeluargaDipilih} selected={keluargaDipilih} />
      <AlbumFoto keluarga={keluargaDipilih} />
    </div>
  );
}

export default Album;
