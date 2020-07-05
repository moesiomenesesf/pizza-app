import React from 'react';
import Home from './components/Home/Home';
import {Switch, Route} from 'react-router-dom';
import ConfirmacaoCompra from './components/ConfirmacaoCompra/ConfirmacaoCompra';
import MontarPizza from './components/MontarPizza/MontarPizza';

export const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/confirm" component={ConfirmacaoCompra} />
            <Route path="/montar" component={MontarPizza} />
        </Switch>
    )
}
