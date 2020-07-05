import React, { Component } from 'react'
import PizzaDetails from '../../commons/PizzaDetails/PizzaDetails'
import Container from '../../commons/Container/Container';
import Button from '../../commons/Button/Button';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import "./ConfirmacaoCompra.scss";

class ConfirmacaoCompra extends Component{

    componentDidMount(){
        this.setState({pizza: this.props.location.state});
    }
    constructor(props){
        super(props);

        this.state = {
            pizza : {
                sabor: null,
                tamanho: null,
                massa: null,
                preco: null,
                incrementos: null,
                pontos: null
            }
        }
    }

    labelPontos(){
        if(this.state.pizza.pontos != null){
            return(
                <label>Você adquiriu <b>{this.state.pizza.pontos}</b> pontos!</label>
            );
        }else{
            return null;
        }
    }

    render(){
        return(
            <Container>
                <h2>Confirmação de Compra</h2>
                <PizzaDetails pizza={this.state.pizza}/>
                {this.labelPontos()}
                <p>Seu pedido chegará em breve! :)</p>
                <Link to="/"> 
                    <Button nome="Voltar" type="primary" icon={faArrowLeft} iconColor="white"/> 
                </Link>
            </Container>
        );
    }
}


export default ConfirmacaoCompra;