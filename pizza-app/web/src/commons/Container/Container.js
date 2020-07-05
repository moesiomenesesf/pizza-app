import React, { Component } from 'react';
import './Container.scss'
import Header from '../Header/Header';
class Container extends Component{

    render(){
        return(
            <div id="container"> 
                <div className="panel">
                    <Header/>
                    {this.props.children} 
                </div>
            </div>
        );
    }
}

export default Container;