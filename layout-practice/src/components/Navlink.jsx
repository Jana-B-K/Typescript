import { NavLink } from "react-router-dom";
import { useState } from "react";


export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className={`nav-links ${open ? "open" : ""}`}>
        <NavLink className="link" to="/" onClick={() => setOpen(false)}>Home</NavLink>
        <NavLink className="link" to="/profile" onClick={() => setOpen(false)}>Profile</NavLink>
        <NavLink className="link" to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
      </div>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>
    </nav>
  );
}
