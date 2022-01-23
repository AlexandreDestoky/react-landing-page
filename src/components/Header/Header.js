import React from 'react';
import './Header.scss'
import logo from "../../assets/logo.svg"
import menu from "../../assets/menu.svg"

export default function Header() {
  return 	<header className="header">

  <div className="container">
    <h1 className="header-logo">
      <span className="sr-only">Zoo365</span>
      <a href="/"  area-lable="Zoo365">
        <img src={logo} alt="Zoo365" loading="lazy"/>
      </a>
    </h1>

    <div className="header__menu">

      {/* <!-- Mobile Navigation Start --> */}
      <button className="button" id="mobile-menu-toggle" aria-label="Toggle Menu" aria-expanded="false" aria-controls="mobileMenu" data-target="#mobileMenu">
        <img src={menu} alt="Mobile Menu" loading="lazy"/>
      </button>
      {/* <!-- Mobile Navigation End --> */}

      <nav className="desktop-menu">
        <h1 className="sr-only">Main Navigation</h1>
        <ul>
          <li><a href="#" className="desktop-menu__link active">Home</a></li>
          <li><a href="#" className="desktop-menu__link">About</a></li>
          <li><a href="#" className="desktop-menu__link">Shop</a></li>
          <li><a href="#" className="desktop-menu__link">Gallery</a></li>
          <li><a href="#" className="desktop-menu__link">Contact</a></li>
        </ul>
      </nav>

    </div>
  </div>

</header>;
}
