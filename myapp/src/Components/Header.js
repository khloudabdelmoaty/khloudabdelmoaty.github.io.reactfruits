import React , {Component} from 'react';
import "./Header.css";
import Image from "./Logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class Header extends Component {
    render(){
        return(
           <nav>
      <a>
      <img src={Image} alt="logo"></img>
      </a>
      <ul>
          <li><a>home</a></li>
          <li><a>pages</a></li>
          <li><a>galery</a></li>
          <li><a>blog</a></li>
          <li><a>elements</a></li>
          <li><a>shop</a></li>
      </ul>
      <div className="icon-nav">
      <FontAwesomeIcon className="icon" icon="search" />
      <FontAwesomeIcon className="icon" icon="shopping-cart" />
      <FontAwesomeIcon className="icon" icon="bars" />

      </div>

           </nav>
            
        )
    }
}
export default Header;