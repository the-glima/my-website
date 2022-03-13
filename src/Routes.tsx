import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from './pages/home/Home'
import Karen from './pages/ka/Ka'

const Routes = () => {
   return(
      <BrowserRouter>
        <Route component= { Home }  path="/" exact />
        <Route component={ Karen }  path="/ka" />
      </BrowserRouter>
   )
}

export default Routes;
