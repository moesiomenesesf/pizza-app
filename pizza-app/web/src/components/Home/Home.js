import React from 'react';
import './Home.scss';
import Button from '../../commons/Button/Button';
import PromocaoDia from '../PromocaoDia/PromocaoDia';
import Container from '../../commons/Container/Container';
import {faPizzaSlice} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Home = () => (
    <Container>
            <PromocaoDia/>
            <label>ou</label>
            <Link to="/montar">
                <Button nome="Monte sua Pizza" type="secondary" icon={faPizzaSlice} iconColor="#AD5151"/>
            </Link>
    </Container>
);

export default Home;