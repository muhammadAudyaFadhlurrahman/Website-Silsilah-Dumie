import React from "react";
import { DataAlbum } from "../data/DataAlbum";

export default function AlbumFoto({ keluarga }) {
  const album = DataAlbum.find((item) => item.keluarga === keluarga);

  const ayahIbu = album?.anggota.filter((a) => a.statusKeluarga === "Ayah" || a.statusKeluarga === "Ibu") || [];

  const anak = album?.anggota.filter((a) => a.statusKeluarga === "Anak") || [];
  const menantu = album?.anggota.filter((a) => a.statusKeluarga === "Menantu") || [];
  const cucu = album?.anggota.filter((a) => a.statusKeluarga === "Cucu") || [];

  const getNamaOrangTua = (orangTua) => {
    if (!orangTua) return null;
    const ayah = album?.anggota.find((a) => a.id === orangTua.ayahId);
    const ibu = album?.anggota.find((a) => a.id === orangTua.ibuId);
    if (ayah && ibu) {
      return `Anak dari ${ayah.namaLengkap.split(" (")[0]} dan ${ibu.namaLengkap.split(" (")[0]}`;
    } else if (ayah) {
      return `Anak dari ${ayah.namaLengkap.split(" (")[0]}`;
    } else if (ibu) {
      return `Anak dari ${ibu.namaLengkap.split(" (")[0]}`;
    }
    return null;
  };

  const renderCards = (items, colClass = "col-md-4", showOrtu = false) =>
    items.map((item, index) => (
      <div className={`${colClass} col-12 mb-3`} key={index}>
        <div className="card h-100 shadow">
          <img src={item.image} className="card-img-top profile-image" alt={`Foto ${item.namaLengkap}`} />
          <div className="card-body text-center">
            <h5 className="card-title">{item.namaLengkap}</h5>
            <p className="card-text">{item.statusKeluarga}</p>
            <p className="card-text">{item.tempatTanggalLahir}</p>
            {item.apakahMasihHidup === "Almarhum" && <p className="text-danger fw-bold">Wafat: {item.tanggalWafat}</p>}
            {showOrtu && <p className="text-secondary fst-italic">{getNamaOrangTua(item.orangTua)}</p>}
          </div>
        </div>
      </div>
    ));

  return (
    <div className="albumfoto-wrapper">
      <h3 className="mb-4">Album Foto: {keluarga}</h3>

      {/* Ayah & Ibu */}
      <div className="row mb-4">{renderCards(ayahIbu, "col-md-6")}</div>

      {/* Anak */}
      {anak.length > 0 && (
        <>
          <h5 className="mb-3">Anak</h5>
          <div className="row mb-4">{renderCards(anak)}</div>
        </>
      )}

      {/* Menantu */}
      {menantu.length > 0 && (
        <>
          <h5 className="mb-3">Menantu</h5>
          <div className="row mb-4">{renderCards(menantu)}</div>
        </>
      )}

      {/* Cucu */}
      {cucu.length > 0 && (
        <>
          <h5 className="mb-3">Cucu</h5>
          <div className="row mb-4">{renderCards(cucu, "col-md-4", true)}</div>
        </>
      )}
    </div>
  );
}
