import React , {Component} from 'react';
import Mynada from "./Components/Mynada"
import About from "./Components/About"
import Header from "./Components/Header"

import Footer from "./Components/Footer"
import Center from "./Components/Center"
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSearch, faShoppingCart ,faBars, faArrowRight,faMapMarker,faPhone,faEnvelope,faPaperPlane} from '@fortawesome/free-solid-svg-icons'

library.add(fab, faSearch, faShoppingCart,faBars , faArrowRight,faMapMarker,faPhone,faEnvelope,faPaperPlane)

class Myapp extends Component
{
  render(){
    return(
      <div>
         <Header/>
        <About/>
        <Center/>
       <Footer/>
      </div>
    )
  }
}
export default Myapp;