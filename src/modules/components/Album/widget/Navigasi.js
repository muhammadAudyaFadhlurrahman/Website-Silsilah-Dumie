import React from "react";

const daftarKeluarga = ["Yeppi Sudarja", "Gunawan Santosa", "Indra Komara", "Budiman Supandi", "Yupi Indrawati", "Agus Arifin", "Meilinda Nursyanti"];

function Navigasi({ onSelect, selected }) {
  return (
    <div className="navigasi-wrapper">
      <h4 className="mb-3">Daftar Keluarga</h4>
      <ul className="list-group">
        {daftarKeluarga.map((nama, idx) => (
          <li key={idx} className={`list-group-item keluarga-item ${selected === nama ? "active-keluarga" : ""}`} onClick={() => onSelect(nama)}>
            {nama}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navigasi;
