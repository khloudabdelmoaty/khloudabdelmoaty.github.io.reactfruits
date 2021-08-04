import React , {Component} from 'react';
import "./Footer.css";
import Image from "./Logo.png"
import Payment from "./payment-1-45x15.png"
import Paymentt from "./2.png"
import Paymenttt from "./payment-3-62x17.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class Footer extends Component {
    render(){
        return(
   <div>
         <section>
         <div className="item">
             <div className="pic">
                 <img src={Image}></img>
                 <div className="line">
                 <p>
                 Weekdays:08:00am - 08:00pm
                 </p>
                 <p>
                 
Weekends:10:00am - 06:00pm
                 </p>
                
             </div>
             <div>
             Get Social

             </div>
             </div>

        
         </div>
         <div className="item">
             <h1 class="h">
             CONTACTS
             </h1>
             <div class="two">
                 <div class="icon">
                 <FontAwesomeIcon  class ="iii" icon="map-marker" />
                 </div>
                 <div class="p">
                 523 Sylvan Ave, 5th Floor
Mountain View, CA 94041 USA
                 </div>
             </div>


             <div class="two">
                 <div class="icon">
                 <FontAwesomeIcon  class="iii" icon="phone" />
                 </div>
                 <div class="p">
                 523 Sylvan Ave, 5th Floor
Mountain View, CA 94041 USA
                 </div>
                 
             </div>
             
             <div class="two">
                 <div class="icon">
                 <FontAwesomeIcon class="iii" icon="envelope" />
                 </div>
                 <div class="p">
                 523 Sylvan Ave, 5th Floor
Mountain View, CA 94041 USA
                 </div>
                 
             </div>
             
         </div>


         
         <div className="item">
         <h1 >
         NEWSLETTER
             </h1>
             
                 <p className="prg"> Subscribe to our newsletter to receive weekly news, updates, special offers, and exclusive discounts.
                 </p>
               <div>
               <input placeholder="enter your e-mail">
                </input>
                <div className="roll">
                
                <FontAwesomeIcon class="icon-item" icon="paper-plane" />
                </div>
               
               </div>
         </div>
 </section>
 <div className="footerr">
    <div> 
    <p>
     © 2021 Grocmart. All rights reserved
     </p>
    </div>
<div>
    <img src={Payment}></img>
    <img src={Paymentt}></img>
    <img src={Paymenttt}></img>
</div>
<div className="last">Privacy Policy</div> 


</div>
   </div>
           
        )
    }
}
export default Footer;