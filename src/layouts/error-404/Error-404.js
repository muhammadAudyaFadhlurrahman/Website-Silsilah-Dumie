import React from "react";

export default function Error404() {
  return (
    <div className="container-error">
      <div className="w-50">
        <img src={require("../../assets/error404/404.png")} alt="error-404" className="w-100 mb-10" />
        <p className="text-primary text-center fw-bolder fs-2">Seems there is nothing here</p>
      </div>
    </div>
  );
}
