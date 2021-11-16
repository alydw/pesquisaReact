import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Primeira from "./Primeira";
import Segunda from "./Segunda";
import Terceira from "./Terceira";
import Quarto from "./Quarto";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Primeira }  path="/" exact />
           <Route component = { Segunda }  path="/segunda" />
           <Route component = { Terceira }  path="/terceira" />
           <Route component = { Quarto }  path="/quarto" />
       </BrowserRouter>
   )
}

export default Routes;