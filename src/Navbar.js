import React from "react";
import {  Link } from "react-router-dom";

// import axios from "axios";

function Navbar() {
  
  
    
  
    return(
      <div>
      
        <h1>Ecommerce Application</h1>
        
        <div>
          <Link to="/"> Dashboard</Link>
          <Link to="/product"> Product</Link>
          <Link to="/catalog"> Catalog</Link>
          <br />
          <br />
        </div> 
  
    </div>)
}

export default Navbar;