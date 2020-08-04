/* 
*/

/* Importações necessárias */
import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";


/* Iniciando e exportando a classe de rotas */
const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
        </Switch>
    </BrowserRouter>
)

export default Routes;
