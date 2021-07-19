import React, { Component} from 'react';
import MenuComponent from "./MenuComponent";
import DishDetailComponent from "./DishDetailComponent";
import {DISHES} from "../shared/dishes";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import HomeComponent from "./HomeComponent";
import {Switch,Route,Redirect} from "react-router-dom";

class MainComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            dishes : DISHES,
        };
    }

    render(){
        const HomePage = _ => {
            return(
                <HomeComponent/>
            );
        }
        const MenuPage = _ => {
            return(
                <MenuComponent dishes = {this.state.dishes} />
            );
        }
        return(
            <div>
                <HeaderComponent />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/menu' component={MenuPage} />
                    <Redirect to='/home' />
                </Switch>
                <FooterComponent />
            </div>
        );
    }
}

export default MainComponent;