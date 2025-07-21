import React from "react";

function ImageWidget() {
  return (
    <div className="container d-flex flex-wrap flex-row shadow p-5 gap-4 justify-content-center">
      <div className="card">
        <img src="/images/aki.jpeg" className="profile-image" alt="Foto Aki" />
      </div>
      <div className="card">
        <img src="/images/enin.png" className="profile-image" alt="Foto Enin" />
      </div>
    </div>
  );
}

export default ImageWidget;
