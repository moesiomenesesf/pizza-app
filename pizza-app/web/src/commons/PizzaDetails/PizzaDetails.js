import React, { Fragment } from 'react';
import './PizzaDetails.scss';
import PizzaIcon from '../../assets/pizza.svg';

function getIncrementos(pizza){
    console.log(pizza);
    let notFirst = false;
    if(pizza.incrementos != null){
        return(
            <Fragment>
                <label><b>Incrementos</b></label>
                <label>{pizza.incrementos.map(incremento => {
                    if(!notFirst){
                        notFirst = !notFirst;
                        return(incremento.nome);
                    }else{
                        return(`, ${incremento.nome}`);
                    }
                })}
                </label>
            </Fragment>
        )
    }else{
        return null;
    }
}

const PizzaDetails = props => {
    return (
        <div class="pizzaDetails">
            <img src={PizzaIcon} alt="Pizza Icon"/>
            <label><b>Massa:</b> {props.pizza.massa}</label>
            <label><b>Sabor:</b> {props.pizza.sabor}</label>
            <label><b>Tamanho:</b> {props.pizza.tamanho}</label>
            {getIncrementos(props.pizza)}
            <label className="preco">R$ {props.pizza.preco}</label>
        </div>
    );
}

export default PizzaDetails;