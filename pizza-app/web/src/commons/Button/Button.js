import React from 'react';
import './Button.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = props => (
    <button className={props.type} onClick={props.onClick}>
        <FontAwesomeIcon icon={props.icon} color={props.iconColor} />
        {props.nome}
    </button>
);

export default Button;