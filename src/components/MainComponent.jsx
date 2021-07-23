import React, { Component} from 'react';
import {DISHES} from "../shared/dishes";
import {COMMENTS} from "../shared/comments";
import {LEADERS} from "../shared/leaders";
import {PROMOTIONS} from "../shared/promotions";
import MenuComponent from "./MenuComponent";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import DishDetailComponent from "./DishDetailComponent";
import HomeComponent from "./HomeComponent";
import ContactComponent from "./ContactComponent";
import AboutComponent from "./AboutComponent";
import {Switch,Route,Redirect} from "react-router-dom";

class MainComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            dishes : DISHES,
            comments : COMMENTS,
            leaders : LEADERS,
            promotions : PROMOTIONS,
        };
    }

    render(){
        const HomePage = _ => {
            return(
                <HomeComponent dish = {this.state.dishes.filter( dish => dish.featured)[0]}
                               leader = {this.state.leaders.filter( leader => leader.featured)[0]}
                                promotion = {this.state.promotions.filter( promo => promo.featured)[0]}
                />
            );
        }
        const MenuPage = _ => {
            return(
                <MenuComponent dishes = {this.state.dishes} />
            );
        }
        const DishDetailPage = ({match}) => {
            return(
                <DishDetailComponent dish = {this.state.dishes.filter( dish => dish.id === parseInt(match.params.dishID,10))[0]}
                                     comments = {this.state.comments.filter( comment => comment.dishId === parseInt(match.params.dishID,10))}
                />
            );
        }
        const AboutPage = _ => {
            return(
                <AboutComponent leaders = {this.state.leaders}/>
            );
        }

        return(
            <div>
                <HeaderComponent />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/menu' component={MenuPage} />
                    <Route path='/menu/:dishID' component={DishDetailPage} />
                    <Route exact path='/contactus' component={ContactComponent} />
                    <Route exact path='/aboutus' component={AboutPage} />
                    <Redirect to='/home' />
                </Switch>
                <FooterComponent />
            </div>
        );
    }
}

export default MainComponent;