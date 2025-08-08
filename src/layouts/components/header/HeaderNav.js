import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function HeaderNav() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("sidebar-open");
    } else {
      document.body.classList.remove("sidebar-open");
    }
  }, [isOpen]);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser"); // Hapus session
    navigate("/login"); // Arahkan ke login
  };

  const menuList = [
    { id: 1, name: "Home", path: "/home", icon: "bi bi-house-door" },
    { id: 2, name: "Album", path: "/album", icon: "bi bi-journal-album" },
    { id: 3, name: "Silsilah", path: "/silsilah", icon: "bi bi-card-image" },
    { id: 4, name: "Logout", action: handleLogout, icon: "bi bi-box-arrow-right" },
  ];

  return (
    <header>
      <nav className="navbar fixed-top shadow-sm navbar-bg">
        <div className="container d-flex justify-content-between align-items-center">
          <NavLink className="navbar-brand fs-3 text-white" to="/home">
            DUMIE
          </NavLink>

          {/* Hamburger button */}
          <button className="navbar-toggler d-md-none" type="button" aria-label="Toggle navigation" onClick={() => setIsOpen(!isOpen)}>
            <span className="navbar-toggler-icon">
              <i className="bi bi-list fs-1 text-white"></i>
            </span>
          </button>

          {/* Menu desktop */}
          <div className="d-none d-md-block">
            <ul className="navbar-nav flex-row">
              {menuList.map((v) => (
                <li className="nav-item me-3" key={v.id}>
                  {v.action ? (
                    <button className="nav-link px-3 fs-5 text-white text-hover-dark2 text-active-dark2 bg-transparent border-0" onClick={v.action}>
                      <i className={`bi me-2 fs-5 text-white ${v.icon}`}></i>
                      {v.name}
                    </button>
                  ) : (
                    <NavLink className="nav-link px-3 fs-5 text-white text-hover-dark2 text-active-dark2" to={v.path}>
                      <i className={`bi me-2 fs-5 text-white ${v.icon}`}></i>
                      {v.name}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Sidebar mobile */}
      <div className={`sidebar-collapse d-md-none ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header d-flex justify-content-between align-items-center px-4">
          <h3 className="sidebar-title">Dumie</h3>
          <button className="btn-close-sidebar" onClick={() => setIsOpen(false)} aria-label="Close sidebar">
            &times;
          </button>
        </div>
        <ul className="navbar-nav p-4">
          {menuList.map((v) => (
            <li className="nav-item mb-3" key={v.id}>
              {v.action ? (
                <button
                  className="nav-link fs-5 text-white bg-transparent border-0"
                  onClick={() => {
                    setIsOpen(false);
                    v.action();
                  }}>
                  <i className={`bi me-2 ${v.icon}`}></i> {v.name}
                </button>
              ) : (
                <NavLink className="nav-link fs-5 text-white" to={v.path} onClick={() => setIsOpen(false)}>
                  <i className={`bi me-2 ${v.icon}`}></i> {v.name}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
      {isOpen && <div className="sidebar-overlay" onClick={() => setIsOpen(false)} />}
    </header>
  );
}

export default HeaderNav;
