import React from 'react';
import { BasciConnect } from "../ConnectWallet";
import SearchBar from '../Search';
export const Header: React.FC = () => {
  return (
  // spaces

    <header id="header">
        <li><a className="nav-links"></a><img id="header-img" src="http://localhost:3000/static/zapprotocollogo.png"  width = "250" height = "40" alt="Company Logo" /> 
          </li>
      <nav id="nav-bar">
        <ul>
            <li>        <SearchBar></SearchBar>
</li>


<li>
            <a className="nav-link" href="#features">
            </a></li>



        <li>
            
            <a className="nav-link" href="/wizard">
              Dashboard
            </a>
          </li>
          <li>
            
            <a className="nav-link" href="#features">
              Releases
            </a>
          </li>
          <li>
            <a className="nav-link" href="#features">
              Documentation
            </a>
          </li>
          <li>
            <a className="nav-link" href="#how-it-works">
              News
            </a>
          </li>
     
          <li>
  
          <a className="nav-link" href="#login">

          <BasciConnect></BasciConnect>
          </a>

          </li>
     
        </ul>
      </nav>
    </header>
  );
}

export default Header;        // spaces
