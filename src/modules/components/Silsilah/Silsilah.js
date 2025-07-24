import React from "react";
import DiagramViewer from "./DiagramViewer";

function Silsilah() {
  return (
    <div className="container-silsilah flex-column">
      <h1>Silsilah Keluarga Dumie</h1>
      <div>
        <DiagramViewer />
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <a href="/images/silsilahDumie.png" download target="_blank" rel="noopener noreferrer">
          <button className="btn-download">Download PNG</button>
        </a>
      </div>
    </div>
  );
}

export default Silsilah;
