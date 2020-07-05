import React from 'react';
import './ItemOption.scss'

function getComplemento(props){
    const {rendimento, ingredientes} = props.model;
    if(rendimento != null){
        return (<div>
                    <label>Rende {rendimento} porções!</label>
                </div>
                );
    }else if(ingredientes != null){
        let noFirst = false;
        return (
                <div>
                    <label>
                        {ingredientes.map(ingrediente => {
                            if(!noFirst){
                                noFirst = !noFirst;
                                return ingrediente;
                            }else{
                                return `, ${ingrediente}`;
                            }
                            
                        }
                            )}
                    </label>  
                </div>          
        );
    }else{
        return null;
    }
}

const classNames = require('classnames');
const ItemOption = props => {
    const classes = classNames({
        itemOption: true,
        checked: props.className != null,
        semComplemento: getComplemento(props) == null
    })
    return (
        <div onClick={props.onClick} className={classes}>
            <div>
                <label className="name">{props.model.nome}</label>
                <label>R${props.model.preco},00</label>
            </div>
            {
                getComplemento(props)
            }
            
        </div>
    );
} 

export default ItemOption;