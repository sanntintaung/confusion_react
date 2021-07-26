import React, { Component} from 'react';
import MenuComponent from "./MenuComponent";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import DishDetailComponent from "./DishDetailComponent";
import HomeComponent from "./HomeComponent";
import ContactComponent from "./ContactComponent";
import AboutComponent from "./AboutComponent";
import {Switch,Route,Redirect,withRouter} from "react-router-dom";
import { connect } from 'react-redux';

const stateToProps = state  => {
    return({
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders,
    });
}

class MainComponent extends Component {
    constructor(props){
        super(props);

    }

    render(){
        const HomePage = _ => {
            return(
                <HomeComponent dish = {this.props.dishes.filter( dish => dish.featured)[0]}
                               leader = {this.props.leaders.filter( leader => leader.featured)[0]}
                                promotion = {this.props.promotions.filter( promo => promo.featured)[0]}
                />
            );
        }
        const MenuPage = _ => {
            return(
                <MenuComponent dishes = {this.props.dishes} />
            );
        }
        const DishDetailPage = ({match}) => {
            return(
                <DishDetailComponent dish = {this.props.dishes.filter( dish => dish.id === parseInt(match.params.dishID,10))[0]}
                                     comments = {this.props.comments.filter( comment => comment.dishId === parseInt(match.params.dishID,10))}
                />
            );
        }
        const AboutPage = _ => {
            return(
                <AboutComponent leaders = {this.props.leaders}/>
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

export default withRouter(connect(stateToProps)(MainComponent));