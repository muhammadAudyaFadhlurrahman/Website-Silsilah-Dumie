import React from "react";
import HeaderNav from "./components/header/HeaderNav.js";
import Footer from "./components/footer/Footer.js";

function Layouts(props) {
  return (
    <div id="main-layout">
      <HeaderNav />

      <main className="mt-20 py-10">{props.children}</main>

      <Footer />
    </div>
  );
}

export default Layouts;
