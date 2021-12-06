import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Primeira from "./Primeira";
import Segunda from "./Segunda";
import Terceira from "./Terceira";
import Quarto from "./Quarto";
import API from "./API"

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Primeira }  path="/" exact />
           <Route component = { Segunda }  path="/segunda" />
           <Route component = { Terceira }  path="/terceira" />
           <Route component = { Quarto }  path="/quarto" />
           <Route component = { API }  path="/api" />
       </BrowserRouter>
   )
}

export default Routes;