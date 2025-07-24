import React from "react";
import ImageWidget from "./ImageWidget";
// import WaveBackground from "./WaveBackground";

function Home() {
  return (
    <div className="container-home">
      <div className="d-flex home-content">
        <div className="container text-center ">
          <h1 className="familyName animated-text">
            <span className="animated-text">Selamat Datang</span> <br className="animated-text"></br>Di Website Keluarga Dumie
          </h1>
          <p className="family-desc animated-text">Website ini dibuat untuk mengenang dan menjaga silsilah keluarga besar Dumie, sebagai bentuk penghormatan kepada orang tua kami tercinta.</p>
          <blockquote className="family-quote animated-text">"Keluarga adalah tempat kita pulang, seburuk apapun dunia di luar sana."</blockquote>
        </div>
        <div className="container-img">
          <ImageWidget />
        </div>
      </div>
    </div>
  );
}

export default Home;
