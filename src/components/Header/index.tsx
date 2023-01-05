import React from 'react';
import { BasciConnect } from "../ConnectWallet";
import SearchBar from '../Search';
export const Header: React.FC = () => {
  return (
  // spaces

    <header id="header" padding-top="100px">
        <li><a className="nav-links"></a><img id="header-img" src="https://mti.com/wp-content/uploads/2021/04/Amazon-Web-Services-Logo-White.png"  width = "55" height = "31" alt="Company Logo" /> 
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
            <a className="nav-link" href="https://app.zap.org/docs/overview">
              Docs
            </a>
          </li>
          <li>
            <a className="nav-link" href="https://medium.com/the-zap-project">
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
