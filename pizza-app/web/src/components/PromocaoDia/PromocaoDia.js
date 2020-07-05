import React, {Component} from 'react';
import Button from '../../commons/Button/Button';
import "./PromocaoDia.scss";
import ApiService from '../../service/ApiService';
import PizzaDetails from '../../commons/PizzaDetails/PizzaDetails';
import {Link} from 'react-router-dom';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'

class PromocaoDia extends Component {

    constructor(props){
        super(props);

        this.state = {
            recomendacao: {
                sabor: null,
                tamanho: null,
                massa: null,
                preco: null,
                pontos: null
            }
        }
    }

    componentDidMount(){
        this.findPizzaRecomendada();
    }

    findPizzaRecomendada(){
        ApiService.findPizzaRecomendada()
        .then(response => this.setState({recomendacao: response}))
        .catch(err => console.log(err));
    }

    render(){
        return(
            <div id="containerPromo">
                <div id="display">
                    <h3>Pizza Recomendada</h3>
                    <PizzaDetails pizza={this.state.recomendacao}/>
                    <p>Valendo <b>{this.state.recomendacao.pontos}</b> pontos!</p>
                </div>
                <Link to={{pathname: "/confirm", state: this.state.recomendacao}}>
                    <Button nome="Comprar" type="primary" icon={faShoppingCart} iconColor="white"/>
                </Link>
            </div>
        );
    }
}

export default PromocaoDia;