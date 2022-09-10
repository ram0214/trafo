import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../pages/Navbar";

class Header extends React.Component {
  render() {
    return(
      
     

        <div className="banner">
          <Navbar/>
          <div className="banner__content">
            <div className="container home">
              <div className="banner__text">
              {/* <h3>Trafo</h3> */}
              <h1>Trafo-The One Stop Converter</h1>
              <p><b>PDFelement Lite. PDFelement Lite is an all-in-one PDF editor and converter that can be used to read, edit, annotate, .</b></p>

              </div>
              
            </div>
          </div>
        </div>
        
    );
  }
}
export default Header;