import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DataAlbum } from "../../Album/data/DataAlbum.js";
import { motion } from "framer-motion";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // ✅ state untuk toggle mata
  const [error, setError] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem("loggedInUser");
    if (savedUser) {
      navigate("/home");
    }
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    let tempErrors = [];

    function normalizeTanggal(tanggal) {
      return tanggal
        .trim()
        .replace(/^(\d)\s/, "0$1 ") // kalau 1 digit jadi 2 digit
        .replace(/\s+/g, " ") // hapus spasi berlebih
        .toUpperCase();
    }

    let foundUser;
    for (let keluarga of DataAlbum) {
      foundUser = keluarga.anggota.find((member) => {
        const namaTanpaAlias = member.namaLengkap.split("(")[0].trim();
        return namaTanpaAlias.toLowerCase() === username.toLowerCase();
      });
      if (foundUser) break;
    }

    // ✅ Cek username
    if (!foundUser) {
      tempErrors.push("❌ Username tidak ditemukan");
    }

    // ✅ Cek password (tetap dijalankan meskipun username salah, supaya bisa muncul bersamaan)
    if (foundUser) {
      const tanggalLahir = foundUser.tempatTanggalLahir.split(",")[1]?.trim().toUpperCase();
      const inputPassword = normalizeTanggal(password);

      if (inputPassword !== tanggalLahir) {
        tempErrors.push("❌ Password salah");
      }
    } else {
      if (password.trim() !== "") {
        tempErrors.push("❌ Password salah");
      }
    }

    if (tempErrors.length > 0) {
      setError(tempErrors);
      return;
    }

    setError([]);
    localStorage.setItem("loggedInUser", foundUser.namaLengkap);
    navigate("/home");
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <div className="login-page">
        <div className="container-login">
          <form onSubmit={handleLogin}>
            <h1>Login</h1>
            {error.length > 0 && (
              <div style={{ color: "red" }}>
                {error.map((err, index) => (
                  <p key={index}>{err}</p>
                ))}
              </div>
            )}

            <div className="input-box">
              <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
              <i className="bi bi-person icon"></i>
            </div>

            <div className="input-box" style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"} // ✅ ganti type sesuai state
                placeholder="password (contoh: 4 Desember 1962)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {/* Icon mata */}
              <i
                className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}
                style={{
                  position: "absolute",
                  right: "1.25rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontSize: "1rem",
                }}
                onClick={() => setShowPassword(!showPassword)}></i>
            </div>

            <div className="remember-forgot">
              <label>
                <input type="checkbox" />
                Remember Me
              </label>
              <a href="#">Forgot Password?</a>
            </div>

            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

export default Login;
