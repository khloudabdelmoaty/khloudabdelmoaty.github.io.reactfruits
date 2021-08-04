import React , {Component} from 'react';
import "./About.css"
import Pic from "./about-576x537.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class About extends Component {
    render(){
        return(
            <section>
                <div class="right">
<img src={Pic} class="pic"></img>
                </div>
                <div class="left">
<h2>
A Few Words About Our Store
</h2>
<h1>
ABOUT US
</h1>
<p>
Grocmart is a family-owned grocery store that has been
 offering quality products for your everyday life since 1999, 
while also providing superior service and competitive prices
</p>
<div className="total">
<div className="circle">
                <FontAwesomeIcon className="iconn" icon="arrow-right" />
               
                </div>
              <div className="both">
              <h2>
                SAM WILLIAMS
                
                </h2>
                <span>
                CEO, Founder
                </span>
              </div>
                </div>
</div>
               
            </section>
        )
    }
}
export default About;