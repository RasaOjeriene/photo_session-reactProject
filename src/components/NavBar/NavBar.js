 import React from 'react';
 import './NavBar.scss';
 import logo from '../../RO logo.png';


 export default function Navbar(){
     return (
         <nav className="navbar">
             <img src={logo} alt="photography logo" />
             <ul className="nav-links">
                 <li>
                    <a href="/" className="nav-link">
                        Home
                    </a>
                 </li>
                 <li>
                    <a href="/" className="nav-link">
                        About
                    </a>
                 </li>
                 <li>
                    <a href="/" className="nav-link active">
                        Projects
                    </a>
                 </li>
             </ul>
         </nav>
     )
 }