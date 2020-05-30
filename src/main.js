import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";
import Product from "./Product";
import Catalog from "./Catalog";
import Navbar from "./Navbar";

class Main extends React.Component {
  
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/product" component={Product} />
            <Route exact path="/catalog" component={Catalog} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

// const Dashboard = () => {
//   return "Dashboard (To enter Products)";
// };

// const Product = () => {
//   return "Products (To see Entered Product)";
// };

// const Catalog = () => {
//   return "Catalog (To see All Products)";
// };

export default Main;
