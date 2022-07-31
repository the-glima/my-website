import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from './pages/home/Home'
import MTGRanking from './pages/mtg-ranking/MTGRanking';

const Routes = () => {
   return(
      <BrowserRouter>
        <Route component= { Home }  path="/" exact />
        <Route component={ MTGRanking }  path="/mtg-ranking" />
      </BrowserRouter>
   )
}

export default Routes;
