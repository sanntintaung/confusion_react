import React, { Component} from 'react';
import {Navbar , NavbarBrand} from "reactstrap";
import MenuComponent from './components/MenuComponent';
import {DISHES} from './shared/dishes';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            dishes: DISHES,
        }
    }
    render(){
        return (
            <div className="App">
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                <MenuComponent dishes = {this.state.dishes} />
            </div>
        );
    };
}

export default App;
