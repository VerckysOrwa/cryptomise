
import React from 'react';
import "../styles/header.css"
import { FaHome,FaCoins, FaNewspaper } from "react-icons/fa";
import {Link} from 'react-router-dom'

const Header = () => {
    return(
         <header>
        <h1>CryptoPrice.io</h1>
<Link to="/" id="home-nav"><FaHome id="home-icon"/></Link>
        <section id='news-nav'>
            <Link to='/businessnews'>
          <h3>
              Business News <FaNewspaper />
          </h3>
          </Link>
          <Link to="/nfts">
          <h3>
            NFTs <FaCoins />
            </h3>
          </Link>
        </section>

      </header>
    )
};

export default Header;
