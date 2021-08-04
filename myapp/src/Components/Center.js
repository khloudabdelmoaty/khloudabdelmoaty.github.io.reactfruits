import React , {Component} from 'react';
import "./Center.css";
import Image from "./parallax-3.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class Center extends Component {
    render(){
        return(
           <section className="content" >
<div className="content-item">
<FontAwesomeIcon  icon="arrow-right" />
<h2> QUALITY PRODUCTS</h2>
<p>
We work with the best suppliers to offer our customers the fresh grocery products of the highest quality.
</p>
</div>
<div className="content-item">
<FontAwesomeIcon  icon="arrow-right" />
<h2> 
AFFORDABLE PRICES</h2>
<p>
We work with the best suppliers to offer our customers the fresh grocery products of the highest quality.
</p>
</div>
<div className="content-item">
<FontAwesomeIcon  icon="arrow-right" />
<h2> FAST SHIPPING</h2>
<p>
We work with the best suppliers to offer our customers the fresh grocery products of the highest quality.
</p>
</div>
<div className="content-item">
<FontAwesomeIcon  icon="arrow-right" />
<h2> QUALITY PRODUCTS</h2>
<p>
We work with the best suppliers to offer our customers the fresh grocery products of the highest quality.
</p>
</div>

           </section>
            
        ) 
    }
}
export default Center;