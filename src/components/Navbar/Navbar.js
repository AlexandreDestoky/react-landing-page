import React from "react";
import { useState, useEffect } from "react";
import "./Navbar.scss";
import menu from "../../assets/menu.svg";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [largeur, setLargeur] = useState(window.innerWidth);

  const toggleNav = () => setToggleMenu(!toggleMenu);

  useEffect(() => {
    const changeWidth = () => {
      setLargeur(window.innerWidth);
    }
    window.addEventListener("resize",changeWidth);

    return () => {
      window.removeEventListener("resize",changeWidth);
    }
  }, [])

  return (
    <nav className="Navbar">
      {(toggleMenu || largeur > 600) && (
        <ul className="liste">
          <li className="items">Home</li>
          <li className="items">Categorie</li>
          <li className="items">Training</li>
        </ul>
      )}
      <button onClick={toggleNav} className="btn"><img src={menu} alt="" /></button>
    </nav>
  );
}
