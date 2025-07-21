import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function HeaderNav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("sidebar-open");
    } else {
      document.body.classList.remove("sidebar-open");
    }
  }, [isOpen]);

  const menuList = [
    { id: 1, name: "Home", path: "/home", icon: "bi bi-house-door" },
    { id: 2, name: "Album", path: "/album", icon: "bi bi-journal-album" },
    { id: 3, name: "Silsilah", path: "/silsilah", icon: "bi bi-card-image" },
  ];

  return (
    <header>
      <nav className="navbar fixed-top shadow-sm navbar-bg">
        <div className="container d-flex justify-content-between align-items-center">
          <NavLink className="navbar-brand fs-3 text-white" to="/home">
            DUMIE
          </NavLink>

          {/* Hamburger button muncul hanya di layar kecil */}
          <button className="navbar-toggler d-md-none" type="button" aria-label="Toggle navigation" onClick={() => setIsOpen(!isOpen)}>
            <span className="navbar-toggler-icon">
              <i className="bi bi-list fs-1 text-white"></i>
            </span>
          </button>

          {/* Menu besar hanya muncul di desktop */}
          <div className="d-none d-md-block">
            <ul className="navbar-nav flex-row">
              {menuList.map((v) => (
                <li className="nav-item me-3" key={v.id}>
                  <NavLink className="nav-link px-3 fs-5 text-white text-hover-dark2 text-active-dark2" to={v.path}>
                    <i className={`bi me-2 fs-5 text-white ${v.icon}`}></i>
                    {v.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Sidebar menu untuk layar kecil */}
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
              <NavLink className="nav-link fs-5 text-white" to={v.path} onClick={() => setIsOpen(false)}>
                <i className={`bi me-2 ${v.icon}`}></i> {v.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Background overlay */}
      {isOpen && <div className="sidebar-overlay" onClick={() => setIsOpen(false)} />}
    </header>
  );
}

export default HeaderNav;
