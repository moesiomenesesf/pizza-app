import React, { Component, Fragment } from 'react';
import Container from "../../commons/Container/Container";
import ApiService from '../../service/ApiService';
import './MontarPizza.scss';
import Button from '../../commons/Button/Button';
import {faTimes, faArrowRight, faArrowLeft, faCheck} from '@fortawesome/free-solid-svg-icons';
import ItemOption from '../../commons/ItemOption/ItemOption';
import { Link } from 'react-router-dom';
import MessageBox from '../../commons/MessageBox/MessageBox';

class MontarPizza extends Component{

    constructor(props){
        super(props);

        this.state = {
            massas: [],
            tamanhos: [],
            sabores: [],
            incrementos: [],
            massaSelecionada: null,
            tamanhoSelecionado: null,
            saborSelecionado: null,
            incrementosSelecionados: [],
            precoTotal: 0,
            step: 1,
            message: null
        }
    }

    componentDidMount(){
        this.findMassas();
        this.findTamanhos();
        this.findSabores();
        this.findIncrementos();
    }

    findMassas(){
        ApiService.findMassas().then(response => {
            this.setState({massas: response});
        });
    }

    findTamanhos(){
        ApiService.findTamanhos().then(response => {
            this.setState({tamanhos: response});
        });
    }

    findSabores(){
        ApiService.findSabores().then(response => {
            this.setState({sabores: response});
        });
    }

    findIncrementos(){
        ApiService.findIncrementos().then(response => {
            this.setState({incrementos: response});
        });
    }

    setMassaSelecionada(massa){
        this.setState({massaSelecionada: massa});
    }

    setTamanhoSelecionado(tamanho){
        this.setState({tamanhoSelecionado: tamanho});
    }

    setSaborSelecionado(sabor){
        this.setState({saborSelecionado: sabor});
    }

    setIncrementoSelecionado(incrementoSelecionado){
        if(this.state.incrementosSelecionados.includes(incrementoSelecionado)){
            this.setState({incrementosSelecionados: this.state.incrementosSelecionados.filter(incremento => incremento !== incrementoSelecionado)})
        }else{
            this.setState({incrementosSelecionados: [...this.state.incrementosSelecionados, incrementoSelecionado]});
        }
    }

    getMessage(){
        const message = this.state.message;
        if(message !== null){
            return (<MessageBox message={message}/>);
        }else{
            return null;
        }
    }

    validate(campo){
        if(campo != null){
            this.nextStep();
            this.setState({message: null});
        }else{
            this.setState({message: "Campo Obrigatório"});
        }
    }

    nextStep(){
        this.setState({step: this.state.step + 1}) ;
        console.log(this.state.step);
    }

    prevStep(){
        this.setState({step: this.state.step - 1}) ;
    }

    formatarResultado(){
        return {sabor: this.state.saborSelecionado.nome, tamanho: this.state.tamanhoSelecionado.nome , massa: this.state.massaSelecionada.nome, incrementos: this.state.incrementosSelecionados, preco: this.calculateTotal(),}
    }

    somaIncrementos(){
        const soma = this.state.incrementosSelecionados.reduce((acumulador, valorAtual)=> acumulador + valorAtual.preco, 0)
        return soma;
    }

    calculateTotal(){
        return this.state.saborSelecionado.preco + this.state.tamanhoSelecionado.preco + this.state.massaSelecionada.preco + this.somaIncrementos();
    }

    addMessage(mensagem){
        this.setState({message: mensagem});
    }

    calcStep(){
        const step = this.state.step;
        switch(step){
            case 1:
                return (
                    <Fragment>
                        <p>Escolha a massa!</p>
                        <form>
                            {this.state.massas.map(massa => {
                                return(
                                    <ItemOption key={massa.id} model={massa} className={this.state.massaSelecionada === massa ? 'checked' : null} onClick= {() => this.setMassaSelecionada(massa)}/>
                                );
                            })}
                        </form>
                        <div class="buttons">
                            <Link to="/">
                                <Button nome="Cancelar" type="secondary" icon={faTimes} iconColor="#AD5151"/>
                            </Link>

                            <Button nome="Avançar" type="primary" icon={faArrowRight} iconColor="white" onClick={() => this.validate(this.state.massaSelecionada)}/>
                        </div>
                        
                    </Fragment>
                    
                    )
                    
            case 2: 
                return(
                    <Fragment>
                        <p>Escolha o tamanho!</p>
                        <form>
                            {
                                this.state.tamanhos.map(tamanho => {
                                    return(
                                        <ItemOption key={tamanho.id} model={tamanho} className={this.state.tamanhoSelecionado === tamanho ? 'checked' : null} onClick= {() => this.setTamanhoSelecionado(tamanho)}/>
                                    );
                                })
                            }
                        </form>
                        <div class="buttons">
                            <Button nome="Voltar" type="secondary" icon={faArrowLeft} iconColor="#AD5151" onClick={() => this.prevStep()}/>
                            <Button nome="Avançar" type="primary" icon={faArrowRight} iconColor="white" onClick={() => this.validate(this.state.tamanhoSelecionado)}/>
                        </div>
                        
                    </Fragment>
                );

            case 3: 
                return(
                    <Fragment>
                        <p>Escolha o sabor!</p>
                        <form>
                        {
                            this.state.sabores.map(sabor => {
                                return(
                                    <ItemOption key={sabor.id} model={sabor} className={this.state.saborSelecionado === sabor ? 'checked' : null} onClick= {() => this.setSaborSelecionado(sabor)}/>
                                );
                            })
                        }
                        </form>
                        <div class="buttons">
                            <Button nome="Voltar" type="secondary" icon={faArrowLeft} iconColor="#AD5151" onClick={() => this.prevStep()}/>
                            <Button nome="Avançar" type="primary" icon={faArrowRight} iconColor="white" onClick={() => this.validate(this.state.saborSelecionado)}/>
                        </div>
                        
                    </Fragment>                    
                );

            case 4: 
            return(
                <Fragment>
                    <p>Escolha os incrementos!</p>
                    <form>
                    {
                        this.state.incrementos.map(incremento => {
                            return(
                                <ItemOption key={incremento.id} model={incremento} className={this.state.incrementosSelecionados.includes(incremento) ? 'checked' : null} onClick= {() => this.setIncrementoSelecionado(incremento)}/>
                            );
                        })
                    }
                    </form>
                    <div class="buttons">
                        <Button nome="Voltar" type="secondary" icon={faArrowLeft} iconColor="#AD5151" onClick={() => this.prevStep()}/>
                        <Link to={{pathname: "/confirm", state: this.formatarResultado()}}>
                            <Button nome="Concluir Pedido" type="primary" icon={faCheck} iconColor="white"/>
                        </Link>
                    </div>
                    
                    
                </Fragment>                    
            );
            
            default:
                return <h1>Algo está Errado!</h1>
        }
    }

    render(){
        
        return(
            <Container>
                {this.getMessage()}
                <h2>Monte sua pizza!</h2>
                {this.calcStep()}
            </Container>
        );
    }
}

export default MontarPizza;