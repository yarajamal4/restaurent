import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
 const [scrolled, setScrolled] = useState(false);

 useEffect(() => {
   const onScroll = () => setScrolled(window.scrollY > 60);
   window.addEventListener("scroll", onScroll);
   return () => window.removeEventListener("scroll", onScroll);
 }, []);

 return (
   <nav className={`navbar navbar-expand-lg fixed-top px-3 px-lg-5 py-3 ${scrolled ? "scrolled" : ""}`}>
     <div className="container-fluid">

       <Link className="navbar-brand navbar-brand-text" to="/">
         Le <span>Prestige</span>
       </Link>

       <button
         className="navbar-toggler"
         type="button"
         data-bs-toggle="collapse"
         data-bs-target="#navMenu"
         aria-controls="navMenu"
         aria-expanded="false"
         aria-label="Toggle navigation"
       >
         <span className="navbar-toggler-icon" />
       </button>
       <div className="collapse navbar-collapse" id="navMenu">
         <ul className="navbar-nav mx-auto mt-3 mt-lg-0">
           <li className="nav-item">
             <Link className="nav-link nav-link-custom" to="/">Home</Link>
           </li>
           <li className="nav-item">
             <Link className="nav-link nav-link-custom" to="/about">About</Link>
           </li>
           <li className="nav-item">
             <Link className="nav-link nav-link-custom" to="/menu">Menu</Link>
           </li>
           <li className="nav-item">
             <Link className="nav-link nav-link-custom" to="/gallery">Gallery</Link>
           </li>
           <li className="nav-item">
             <Link className="nav-link nav-link-custom" to="/reservation">Reservation</Link>
           </li>
           <li className="nav-item">
             <Link className="nav-link nav-link-custom" to="/contact">Contact</Link>
           </li>
         </ul>
         <Link className="btn-outline-gold mt-3 mt-lg-0" to="/reservation">
           Reserve
         </Link>
       </div>

     </div>
   </nav>
 );
};

export default Navbar;